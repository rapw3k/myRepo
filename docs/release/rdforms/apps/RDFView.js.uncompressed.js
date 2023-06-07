require({cache:{
'url:rdforms/apps/RDFViewTemplate.html':"<div>\n    <div data-dojo-type='dijit/layout/TabContainer' data-dojo-attach-point='_tabContainer' style='height: 100%' data-dojo-props=\"nested: true\">\n        <div data-dojo-type='dijit/layout/ContentPane' title='RDF/XML' data-dojo-attach-point='_rdfxmlTab'>\n            <div data-dojo-type='dijit/form/SimpleTextarea' data-dojo-attach-point='_rdfxml' style='padding: 0px; margin: 0px;height: 100%; width: 100%; overflow:auto;border-width:0px;'></div>\n        </div>\n        <div data-dojo-type='dijit/layout/ContentPane' title='RDF/JSON' data-dojo-attach-point='_rdfjsonTab'>\n            <div data-dojo-type='dijit/form/SimpleTextarea' data-dojo-attach-point='_rdfjson' style='padding: 0px; margin: 0px;height: 100%; width: 100%; overflow:auto;border-width:0px;'></div>\n        </div>\n    </div>\n</div>\n"}});
/*global define*/
define("rdforms/apps/RDFView", ["dojo/_base/declare", 
	"dojo/_base/lang",
    "dojo/topic",
	"dojo/json",
	"dijit/layout/_LayoutWidget",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
    "dijit/layout/TabContainer",
    "dijit/form/SimpleTextarea",
	"rdfjson/Graph",
    "rdfjson/formats/converters",
	"dojo/text!./RDFViewTemplate.html"
], function(declare, lang, topic, json, _LayoutWidget,  _TemplatedMixin, _WidgetsInTemplateMixin,
            TabContainer, SimpleTextarea, Graph, converters, template) {

    return declare([_LayoutWidget, _TemplatedMixin, _WidgetsInTemplateMixin], {
        //===================================================
        // Public attributes
        //===================================================
        graph: "",
        subView: "rdf/xml",

        //===================================================
        // Public methods
        //===================================================
        getGraph: function() {
            switch(this.subView) {
                case "rdf/xml":
                    return this.getRDFXML();
                case "rdf/json":
                    return this.getRDFJSON();
            }
        },
        setGraph: function(graph) {
            switch(this.subView) {
                case "rdf/xml":
                    this.setRDFXML(graph);
                case "rdf/json":
                    this.setRDFJSON(graph);
            }
        },

        //===================================================
        // Inherited attributes
        //===================================================
        templateString: template,

        //===================================================
        // Inherited methods
        //===================================================
        startup: function() {
            this.inherited("startup", arguments);
            topic.subscribe(this._tabContainer.id+"-selectChild", lang.hitch(this, this._selectChild));
        },
        resize: function( ){
            this.inherited("resize", arguments);
            if (this._tabContainer) {
                this._tabContainer.resize();
            }
        },
	//===================================================
	// Private methods
	//===================================================	
        getRDFXML: function() {
            return converters.rdfxml2graph(this._rdfxml.get("value"))
        },
        setRDFXML: function(graph) {
            this._rdfxml.set("value", converters.rdfjson2rdfxml(graph));
        },
        getRDFJSON: function() {
            return new Graph(json.parse(this._rdfjson.get("value")));
        },
        setRDFJSON: function(graph) {
            this._rdfjson.set("value", json.stringify(graph.exportRDFJSON(), 0, 2));
        },

        _selectChild: function(child) {
            var graph = this.getGraph();
            if(child === this._rdfxmlTab) {
                this.subView = "rdf/xml";
            } else if(child === this._rdfjsonTab) {
                this.subView = "rdf/json";
            }
            this.setGraph(graph);
        }
    });
});