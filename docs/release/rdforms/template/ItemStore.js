//>>built
define("rdforms/template/ItemStore","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/request ./Bundle ./Group ./PropertyGroup ./Text ./Choice ./OntologyStore ./Converter ../model/Engine".split(" "),function(n,g,h,p,q,k,r,s,t,u,v,w){return n(null,{automaticSortAllowed:!0,ignoreMissingItems:!0,_bundles:null,_registry:null,_registryByProperty:null,_ontologyStore:null,getTemplate:function(a){return this.getItem(a)},getChildren:function(a,c){if(null==a)return[];var b=a.getSource(!0),d=b.content||
b.items||[];return c?this._createItems(d,a._forceChildrenClones,a.getBundle()):(b=this.getItem(b["extends"]))?b.getChildren().concat(a.getChildren(!0)):a.getChildren(!0)},getItem:function(a){if(null!=a)return this._registry[a]},getItems:function(){var a=[],c;for(c in this._registry)this._registry.hasOwnProperty(c)&&a.push(this._registry[c]);return a},renameItem:function(a,c){if(this._registry[c])throw"Cannot rename to "+c+" since an item with that id already exists.";if(""===c||null===c)throw"Cannot give an item an empty string or null as id.";
var b=this._registry[a];b&&(delete this._registry[a],this._registry[c]=b,b.setId(c));for(var d=function(b){if(b=b.content)for(var e=0;e<b.length;e++){var f=b[e];if(f.id===a||f["@id"]===a)f.id=c,delete f["@id"];f.content&&d(f)}},b=this.getItems(),e=0;e<b.length;e++){var f=b[e];f instanceof k&&d(f._source)}},getItemIds:function(){var a=[],c;for(c in this._registry)this._registry.hasOwnProperty(c)&&a.push(c);return a},getItemByProperty:function(a){return this._registryByProperty[a]},detectTemplate:function(a,
c,b){return w.constructTemplate(a,c,this,b)},registerBundle:function(a){a.itemStore=this;var c=new q(a);this._bundles.push(c);var b=a.source.templates||a.source.auxilliary;b instanceof Array&&this._createItems(b,!1,c);"object"===typeof a.source.cachedChoices&&this._ontologyStore.importRegistry(a.source.cachedChoices);return c},getBundles:function(){return this._bundles},createTemplate:function(a){return this.registerBundle({source:a}).getRoot()},createTemplateFromChildren:function(a){a=h.map(a||[],
function(a){return"string"===typeof a?this.getItem(a):a},this);return new k({source:{},children:a,itemStore:this})},setPriorities:function(a){this.priorities=a},populate:function(a,c){var b=a.length,d=function(){b--;0===b&&c()};h.forEach(a,function(a){if(g.isString(a)||"sirff"===a.type)a=g.isString(a)?a:a.url,p.get(a,{handleAs:"json"}).then(g.hitch(this,function(a){this.createTemplate(a);d()}),d);else if("exhibit"===a.type){var b;null==b&&(b=new v(this));b.convertExhibit(a.url,d)}},this)},createExtendedSource:function(a,
c){var b=g.mixin(g.clone(a),c);b._extendedSource=c;b["extends"]=null;delete b.children;return b},createItem:function(a,c,b,d){var e,f=a.id||a["@id"],h=a.type||a["@type"];if(a["extends"]){var l=this._registry[a["extends"]];if(null==l&&!this.ignoreMissingItems)throw"Cannot find item to extend with id: "+a["extends"];if(l)return a=this.createExtendedSource(l.getSource(),a),this.createItem(a,!1,!1,d)}if(null!=h){switch(h){case "text":e=new s({source:a,itemStore:this,bundle:d});break;case "choice":e=new t({source:a,
itemStore:this,ontologyStore:this._ontologyStore,bundle:d});break;case "group":e=new k({source:a,children:null,itemStore:this,bundle:d});break;case "propertygroup":e=new r({source:a,children:null,itemStore:this,bundle:d})}!0!==b&&(null!=a.property&&(this._registryByProperty[a.property]=e,this.priorities&&null!=this.priorities[a.property]&&(e.priority=this.priorities[a.property])),null!=f&&null==this._registry[f]&&(this._registry[f]=e,null!=d&&d.addItem(e)));return e}if(void 0===f)throw"Cannot create subitem, 'type' for creating new or 'id' for referencing external are required.";
if(void 0===this._registry[f])throw"Cannot find referenced subitem using identifier: "+f;for(var m in a)if(a.hasOwnProperty(m)&&"id"!==m&&"@id"!==m){c=!0;break}return!0===c?(a=g.mixin(g.clone(this._registry[f]._source),a),this.createItem(a,!1,!0)):this._registry[f]},removeItem:function(a,c){var b=a.getBundle();null!=b&&b.removeItem(a);null!=a.getId()&&delete this._registry[a.getId()];b=a.getProperty();null!=b&&this._registryByProperty[b]===a&&delete this._registryByProperty[b]},constructor:function(a){this._bundles=
[];this._registry={};this._registryByProperty={};this._ontologyStore=a||new u},_createItems:function(a,c,b){return h.map(a,function(d,e){g.isString(d)&&(d=a[e]={id:d});return this.createItem(d,c,!1,b)},this)}})});
//# sourceMappingURL=ItemStore.js.map