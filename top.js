var modtask = function(push) {
    var dataservice = 'https://izyware.com/';
    modtask.modcfg = {
        getName: function(nam) {
            switch (nam) {
                case 'dataservice':
                    return dataservice;
                    break;
                default:
                    alert('ADD HANDLING TO modcfg for ' + nam);
                    break;
            }
        }
    };
    modtask.groupidobject = {
        transportmodule: 'qry/transport/scrsrc',
        groupid: '81'
    };

    var modnav = {
        appname : 'sampleshellapp',
        items: {}
    };

    modnav.items["home"] = {
        "menu": {
            "msg": "HOME",
            "action": modtask.ldmod("kernel\\path").rel("home/list")
        }
    };
    
    modnav.items["catalog"] = {
        "menu": {
            "msg": "CATALOG",
            "action": modtask.ldmod("kernel\\path").rel("catalog/list")
        }
    };    

    // TODO: have the user module (or the session), return the current server time/timezone
    // and do the following calculation automatically on the fly 
    modtask.ldmod("kernel\\mod").ldonce('core\\datetime').timezone_context_inmins = -7 * 60;

    modtask.ldmod('kernel/mod').ldonce('ui\\node\\direct')['groupidobject'] = modtask.groupidobject;
    modtask.ldmod('kernel/mod').ldonce('ui\\node\\direct')['dataservice'] = dataservice;

    modtask.ldmod('kernel/mod').ldonce('ui/node/direct')['groupidobject'] = modtask.groupidobject;
    modtask.ldmod('kernel/mod').ldonce('ui/node/direct')['dataservice'] = dataservice;

    push({
        "css": modtask.ldmod('ui/theme').sp('thememod', 'ui/theme/whiteblue/desktop').setup(modtask.modcontroller.getModCore()).getRoot(),
        "parts": {
            "header": {
                "parts": "ext",
                "what": "ui/w/shell/top",
                "initval": {
                    'groupidobject': modtask.groupidobject,
                    "modcfg": modtask.modcfg,
                    "logomod": modtask.ldmod("kernel\\path").rel('../com/logo')
                },

                "onuserstate": [
                    function(push) {
                        try {
                            modtask.user = push.sourcepart.extpart.user;
                        } catch (e) {}
                        var items = [];
                        if (modtask.user == false) {
                            items = modtask.publicnavitems;
                        } else {
                            items = ["home"];
                            if (true) // modtask.user.role == "administrator")
                            {
                                items.push("accounts");
                            }
                        }
                        modtask.modnav = modtask.ldmod('ui/w/shell/nav').sp({
                            "modnav": modnav,
                            "items": items
                        });
                        modtask.modnav.set(push);
                    }
                ]
            }
        }
    });
}


modtask.publicnavitems = ["catalog"];

modtask.__$d = ["rel:nav", "ui/w/shell/top", "rel:../com/logo", 'kernel/mod', 'ui/theme', 'ui/theme/whiteblue/desktop'];
