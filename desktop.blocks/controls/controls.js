modules.define('controls', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {

        onTriggerClick: function (e) {
            e.preventDefault();
            // Иницируем событие и передаем направление пролистывания
            this.emit('controlsClick',{
                right : e.target.className == 'controls__right' ? true : false 
            });
        }

    }, {
        live : function() {
         // Cлушаем клики
            this.liveBindTo('right', 'click', function (e) {
                this.onTriggerClick(e);
            });

            this.liveBindTo('left', 'click', function (e) {
                this.onTriggerClick(e);
            });
 }
    }));
})
