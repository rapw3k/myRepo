//>>built
define("rdforms/view/DateTime","dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-construct dojo/date/stamp dojo/_base/array dijit/_Widget dijit/form/Select dijit/form/DateTextBox dijit/form/NumberSpinner".split(" "),function(l,e,m,b,d,g,n,p,h,f){return l(n,{yearChoiceLabel:"Year",dateChoiceLabel:"Date",binding:null,item:null,_date:null,_valid:!1,_firstTime:!0,buildRendering:function(){this.domNode=this.srcNodeRef||b.create("div");this.editorNode=b.create("span",{"class":"rformsDateValue"},
this.domNode);this.formatChooserNode=b.create("span",null,this.domNode);var a=this.binding.getValue();if(this._valid=null!=a&&""!=a)a.match(/.*Z$/)&&(a=a.substr(0,a.length-1)),this._date=d.fromISOString(a),this._valid=null!=this._date;this._date=this._date||new Date;this._valid?/^\d{4}$/.test(a)?(this._showYear(),this._renderFormatChooser("Year")):/T/.test(a)&&-1===a.indexOf("T00:00:00")?(this._showDateTime(),this._renderFormatChooser("DateTime")):(this._showDate(),this._renderFormatChooser("Date")):
(this._showDate(),this._renderFormatChooser("Date"))},_renderFormatChooser:function(a){this._formatChooser&&this._formatChooser.destroy();var c=[{label:"Year",value:"Year"},{label:"Date",value:"Date"},{label:"Date and time",value:"DateTime"}];g.forEach(c,function(k){k.value===a&&(k.selected=!0)});this._formatChooser=new p({options:c,onChange:e.hitch(this,function(a){this["_show"+a]()})},b.create("div",null,this.formatChooserNode))},_destroyEditors:function(){this._firstTime=!1;g.forEach(["cal","year",
"hour","minute"],function(a){a="_"+a+"Editor";null!=this[a]&&(this[a].destroy(),delete this[a])},this);m.set(this.editorNode,"innerHTML","")},_showDate:function(){var a=this._firstTime?null:new Date;this._destroyEditors();if(this._valid){var a=this._date,c=d.toISOString(this._date);this.binding.setValue(c.substring(0,c.indexOf("T")))}this._calEditor=new h({style:{width:"10em"},value:a,disabled:!this.item.isEnabled(),invalidMessage:"Proper date format is required, value will not be saved",onChange:e.hitch(this,
function(a){(this._valid=this._calEditor.isValid()&&null!=a)?(this._date.setFullYear(a.getFullYear(),a.getMonth(),a.getDate()),a=d.toISOString(a),this.binding.setValue(a.substring(0,a.indexOf("T")))):this.binding.setValue("")})},b.create("div",null,this.editorNode))},_showDateTime:function(){this._destroyEditors();var a=new Date;this._valid&&(a=this._date,this.binding.setValue(d.toISOString(this._date)));var c=e.hitch(this,function(){var a=this._calEditor.get("value"),c=this._hourEditor.get("value"),
b=this._minuteEditor.get("value");(this._valid=this._calEditor.isValid()&&null!=a&&this._hourEditor.isValid()&&!isNaN(c)&&this._minuteEditor.isValid()&&!isNaN(b))?(a=this._calEditor.get("value"),a.setHours(this._hourEditor.get("value"),this._minuteEditor.get("value")),this.binding.setValue(d.toISOString(a)),this._date=a):this.binding.setValue("")});this._calEditor=new h({style:{width:"10em"},value:a,disabled:!this.item.isEnabled(),invalidMessage:"Proper date format is required, value will not be saved",
onChange:c},b.create("div",null,this.editorNode));b.create("span",{innerHTML:"\x26nbsp;H:"},this.editorNode);this._hourEditor=new f({style:{width:"3em"},editOptions:{pattern:"##"},constraints:{pattern:"##",min:0,max:23,places:0},value:a.getHours(),smallDelta:1,intermediateChanges:!0,onChange:c},b.create("div",null,this.editorNode));b.create("span",{innerHTML:"\x26nbsp;M:"},this.editorNode);this._minuteEditor=new f({style:{width:"3em"},editOptions:{pattern:"##"},constraints:{pattern:"##",min:0,max:59,
places:0},value:a.getMinutes(),smallDelta:1,intermediateChanges:!0,onChange:c},b.create("div",null,this.editorNode))},_showYear:function(){this._destroyEditors();var a=new Date;this._valid&&(a=this._date,this.binding.setValue(""+this._date.getFullYear()));this.binding.setValue(""+a.getFullYear());this._yearEditor=new f({style:{width:"6em"},editOptions:{pattern:"####"},constraints:{pattern:"####",min:0,max:9999,places:0},value:a.getFullYear(),smallDelta:1,intermediateChanges:!0,onChange:e.hitch(this,
function(a){(this._valid=this._yearEditor.isValid())?(this.binding.setValue(""+d.fromISOString(a).getFullYear()),this._date.setFullYear(a)):this.binding.setValue("")})},b.create("div",null,this.editorNode))},_setValueAttr:function(a){this.binding.setValue(a)}})});
//# sourceMappingURL=DateTime.js.map