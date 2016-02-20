modules.define('viewport', ['i-bem__dom','jquery','cookie'], 
  function(provide, BEMDOM, $, cookie) {

    provide(BEMDOM.decl(this.name, {

        onSetMod: {
            'js':  {
              inited: function () {
                  
                  this._Files = this.findBlockInside('files');
                  this._Image = this.findBlockInside('image');
                  _File = this._Files;                        
        
                  var _Controls = this.findBlockInside('controls').domElem;
                  var _Files = this._Files.domElem;

                  this._pos = parseInt((cookie.get('current_pos')) ? cookie.get('current_pos') : 0);
                  this.Show();

                  BEMDOM.blocks.controls
                      .on(this.domElem, 'controlsClick', this.onControlsClick, this);
                  BEMDOM.blocks.files
                      .on(this.domElem, 'itemClick', this.onItemClick, this);

                  this.findBlockInside('wrapper')
                        .bindTo('mouseenter', function(e) {
                            _Files.slideDown('fast');
                        })
                        .bindTo('mouseleave', function(e) {
                            _Files.slideUp('fast');
                        });

                  this
                    .bindToDoc('mouseenter',function(e) {
                      _Controls.fadeIn();
                    })
                    .bindToDoc('mouseleave',function(e) {
                      _Controls.fadeOut();
                    });
                    
                    this.bindTo('mousewheel DOMMouseScroll', function(e) {
                        e.preventDefault();
                        var oEvent = e.originalEvent;
                        var elemWidth = this._Files.elem('item_current_yes').width();
                        var bLeft = parseInt(_Files.css('left').slice(0, -2));
                        var bRight = $(window).width() - parseInt(_Files.css('width').slice(0, -2)) - 70;
                        
                        if ((bLeft <= 0) || (bLeft >= bRight)) {
                          var delta = (oEvent.wheelDelta ? oEvent.wheelDelta/120*elemWidth/1.3 : oEvent.detail/(-3)*elemWidth/1.3) || false;
                          bLeft += delta;
                          bLeft = (bLeft > 0 ? 0 : bLeft);
                          bLeft = (bLeft <= bRight ? bRight : bLeft);
                          _Files.css({left: bLeft});
                        }
                    });             
              },
              '': function() {
                    this
                      .unbindFromDoc('mouseenter')
                      .unbindFromDoc('mouseleave');
              }
            }
      },
    onItemClick: function (e,data) {
        this._Files.delMod(this._Files.domElem.children().eq(this._pos), 'current_yes');
        this._pos = data.pos;
        this.Show();
    },
    onControlsClick: function (e, data) {
        a = this._pos >= this._Files.params.group.length-1;
        b = this._pos <= 0;
        c = data.right;
/*    
      // Просмотр без зацикливания
        if ( a&c || b&!c ) return;

        this._Files.delMod(this._Files.domElem.children().eq(this._pos), 'current_yes');
        //Переключаем на следующую картинку в зависимости от выбранного направления
        c ? this._pos++ : this._pos--;
*/        
      // Непрерывный просмотр
        this._Files.delMod(this._Files.domElem.children().eq(this._pos), 'current_yes');
        // Проверяем конец и начало галлери
        this._pos = a&c ? 0 : b&!c ? this._Files.params.group.length-1 : 
        //Переключаем на следующую картинку в зависимости от выбранного направления
                      c ? this._pos + 1 : this._pos - 1;        
        this.Show();
    },

    Show: function(e){
        _Image = this._Image.domElem;
        _Image.attr('src',_File.params.group[this._pos].image);
        _File.setMod(_File.domElem.children().eq(this._pos), 'current_yes');
        cookie.set('current_pos', this._pos);
    }
  }));
})
