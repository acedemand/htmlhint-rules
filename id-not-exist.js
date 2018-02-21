module.exports = function(HTMLHint) {
  HTMLHint.addRule({
        id: 'id-not-exist',
        description: 'id id-exist rule.',
        init: function(parser, reporter){
            var self = this;
            parser.addListener('tagstart', function(event){
                var tagName = event.tagName.toLowerCase();
                var attrs = event.attrs,
                                attr,
                                col = event.col + event.tagName.length + 1;

                containsId = false;
                for(var i=0; i < attrs.length; ++i){
                    attrName = attrs[i].name
                    if(attrName === 'id'){
                        containsId = true;
                        break;
                    }
                }
                 reporter.warn('id attribute not found', event.line, event.col, self, event.raw);
                
            });
        }
    });
};
