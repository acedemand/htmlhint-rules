module.exports = function(HTMLHint) {
    HTMLHint.addRule({
        id: 'prependid-exist',
        description: 'id id-exist rule.',
        init: function(parser, reporter) {
            var self = this;
            parser.addListener('tagstart', function(event) {
                var tagName = event.tagName.toLowerCase();
                var attrs = event.attrs,
                    attr,
                    col = event.col + event.tagName.length + 1;

                if (tagName !== "h:form")
                    return;

                prependIdExist = false;
                for (var i = 0; i < attrs.length; ++i) {
                    attrName = attrs[i].name.toLowerCase()
                    if (attrName !== 'prependid') {
                        break;
                    }
                    if (attrs[i].value !== false) {
                        reporter.warn('<h:form prependid must exist and must  be set to false', event.line, event.col, self, event.raw);
                        break;
                    }
                    prependIdExist = true

                }
                if (prependIdExist != true) {
                    reporter.warn('<h:form prependid must exist and must  be set to false', event.line, event.col, self, event.raw);

                }

            });
        }
    });
};
