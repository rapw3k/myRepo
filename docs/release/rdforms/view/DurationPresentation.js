//>>built
require({cache:{"url:rdforms/view/DurationPresentationTemplate.html":'\x3cdiv\x3e\n  \x3cspan data-dojo-attach-point\x3d"yearsLabelNode"\x3eYears\x3c/span\x3e\x26nbsp;\x3cspan data-dojo-attach-point\x3d"yearsNode" style\x3d"width: 4em;"\x3e0\x3c/span\x3e\n  \x26nbsp;\x26nbsp;\x3cspan data-dojo-attach-point\x3d"monthsLabelNode"\x3eMonths\x3c/span\x3e\x26nbsp;\x3cspan data-dojo-attach-point\x3d"monthsNode" style\x3d"width: 4em;"\x3e0\x3c/span\x3e\n  \x26nbsp;\x26nbsp;\x3cspan data-dojo-attach-point\x3d"daysLabelNode"\x3eDays\x3c/span\x3e\x26nbsp;\x3cspan data-dojo-attach-point\x3d"daysNode" style\x3d"width: 4em;"\x3e0\x3c/span\x3e\n  \x26nbsp;\x26nbsp;\x3cspan data-dojo-attach-point\x3d"hoursLabelNode"\x3eHours\x3c/span\x3e\x26nbsp;\x3cspan data-dojo-attach-point\x3d"hoursNode" style\x3d"width: 4em;"\x3e0\x3c/span\x3e\n  \x26nbsp;\x26nbsp;\x3cspan data-dojo-attach-point\x3d"minutesLabelNode"\x3eMinutes\x3c/span\x3e\x26nbsp;\x3cspan data-dojo-attach-point\x3d"minutesNode" style\x3d"width: 4em;"\x3e0\x3c/span\x3e\n\x3c/div\x3e\n'}});
define("rdforms/view/DurationPresentation",["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/text!./DurationPresentationTemplate.html"],function(c,d,e,f){return c([d,e],{templateString:f,yearsLabel:"",_setYearsLabelAttr:{node:"yearsLabelNode",type:"innerHTML"},monthsLabel:"",_setMonthsLabelAttr:{node:"monthsLabelNode",type:"innerHTML"},daysLabel:"",_setDaysLabelAttr:{node:"daysLabelNode",type:"innerHTML"},hoursLabel:"",_setHoursLabelAttr:{node:"hoursLabelNode",type:"innerHTML"},
minutesLabel:"",_setMinutesLabelAttr:{node:"minutesLabelNode",type:"innerHTML"},years:0,_setYearsAttr:{node:"yearsNode",type:"innerHTML"},months:0,_setMonthsAttr:{node:"monthsNode",type:"innerHTML"},days:0,_setDaysAttr:{node:"daysNode",type:"innerHTML"},hours:0,_setHoursAttr:{node:"hoursNode",type:"innerHTML"},minutes:0,_setMinutesAttr:{node:"minutesNode",type:"innerHTML"},_setValueAttr:function(a){var b=function(a){return a&&1<a.length?parseInt(a[0],10):0};this.set("years",b(a.match(/([0-9])*Y/)));
this.set("days",b(a.match(/([0-9])*D/)));this.set("hours",b(a.match(/([0-9])*H/)));-1==a.indexOf("T")?this.set("months",b(a.match(/([0-9])*M/))):(a=a.split("T"),this.set("months",b(a[0].match(/([0-9])*M/))),this.set("minutes",b(a[1].match(/([0-9])*M/))))}})});
//# sourceMappingURL=DurationPresentation.js.map