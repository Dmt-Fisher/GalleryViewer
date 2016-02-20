 modules.define('files', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onElemSetMod: {
            'item': { 
                'current_yes' : {
                    'true': function (elem, modName, modVal) {
                    }
                },
            },
        },
           
        onTriggerElemClick: function (e) {
            e.preventDefault();
            // Когда мы получили состояние объекта, нам нужно оповестить другие блоки о том, что
            // произошло. Для этого мы говорим, что произошло событие itemClick,
            // заодно передаём важные параметры:  идентификатор элемента.
                this.emit('itemClick', {
                    pos: this.elemParams(e.currentTarget).pos - 1
                });

        }
    },{
        live: function () {
            // Слушаем клик
            this.liveBindTo('item', 'click', function (e) {                
                this.onTriggerElemClick(e);
            });
        }
    }

    ));
});
