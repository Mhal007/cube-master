module.export({documentRef:function(){return documentRef},windowRef:function(){return windowRef}});module.link('./EventListener',{default:"EventListener"},0);module.link('./types',{"*":"*"},1);module.link('./useEventListener',{default:"useEventListener"},2);var documentRef = {
  current: typeof document === 'undefined' ? null : document
};
var windowRef = {
  current: typeof window === 'undefined' ? null : window
};


