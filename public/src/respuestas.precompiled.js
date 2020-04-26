(function () {
  var template = Handlebars.template,
    templates = (Handlebars.templates = Handlebars.templates || {});
  templates["respuestas"] = template({
    "1": function (container, depth0, helpers, partials, data) {
      var helper,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        "    <div>\n        <a>" +
        container.escapeExpression(
          ((helper =
            (helper =
              lookupProperty(helpers, "datos") ||
              (depth0 != null ? lookupProperty(depth0, "datos") : depth0)) !=
            null
              ? helper
              : container.hooks.helperMissing),
          typeof helper === "function"
            ? helper.call(
                depth0 != null ? depth0 : container.nullContext || {},
                {
                  name: "datos",
                  hash: {},
                  data: data,
                  loc: {
                    start: { line: 3, column: 11 },
                    end: { line: 3, column: 20 },
                  },
                }
              )
            : helper)
        ) +
        "\n    </div>\n"
      );
    },
    compiler: [8, ">= 4.3.0"],
    main: function (container, depth0, helpers, partials, data) {
      var stack1,
        lookupProperty =
          container.lookupProperty ||
          function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
              return parent[propertyName];
            }
            return undefined;
          };

      return (
        ((stack1 = lookupProperty(helpers, "each").call(
          depth0 != null ? depth0 : container.nullContext || {},
          {
            name: "each",
            hash: {},
            fn: container.program(1, data, 0),
            inverse: container.noop,
            data: data,
            loc: {
              start: { line: 1, column: 3 },
              end: { line: 5, column: 13 },
            },
          }
        )) != null
          ? stack1
          : "") + "   "
      );
    },
    useData: true,
  });
})();
