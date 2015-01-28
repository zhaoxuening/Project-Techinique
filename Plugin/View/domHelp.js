domHelp = {
   addElement: function (parent, tagName) {
      var tag = document.createElement(tagName);
      parent.appendChild(tag);
      for (var i = 2; i < arguments.length; i += 2) {
         tag.setAttribute(arguments[i], arguments[i + 1]);
      }
      return tag;
   },

   cleanBody: function () {
      var body = document.getElementsByTagName("body").item(0);
      for (var i = 0; body.childNodes.length; i++) {
         body.removeChild(body.childNodes.item(0));
      }
   },

   addText: function (tag, text) {
      var node = document.createTextNode(text);
      tag.appendChild(node);
      return node;
   },

   addForm: function (parent, attributs) {
      var form;
      form = this.addElement(parent, "form");
      if (attributs.id) {
         form.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         form.setAttribute("class", attributs.class);
      }
      return form;
   },

    addImg: function (parent,attributs) {
        var img;
        img = this.addElement(parent, "img");
        if (attributs.src) {
            img.setAttribute("src", attributs.src);
        }
        if (attributs.id) {
            img.setAttribute("id", attributs.id);
        }
        return img;
    },

    addFieldset: function (parent, attributs) {
      var fieldset;
      fieldset = this.addElement(parent, "fieldset");
      if (attributs.id) {
         fieldset.setAttribute("id", attributs.id);
      }
      return fieldset;
   },

   addLegend: function (parent, attributs) {
      var legend;
      legend = this.addElement(parent, "legend");
      if (attributs.id) {
         legend.setAttribute("id", attributs.id);
      }
      return legend;
   },

   addLabel: function (parent, attributs) {
      var label;
      label = this.addElement(parent, "label");
      if (attributs.id) {
         label.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         label.setAttribute("class", attributs.class);
      }
      if (attributs.for) {
         label.setAttribute("for", attributs.for);
      }
      return label;
   },

   addInputText: function (parent, attributs) {
      var input;
      input = this.addElement(parent, "input", "type", attributs.type);
      if (attributs.id) {
         input.setAttribute("id", attributs.id);
      }
      if (attributs.placeholder) {
         input.setAttribute("placeholder", attributs.placeholder);
      }
      if (attributs.onchange) {
         input.setAttribute("onchange", attributs.onchange);
      }
      if (attributs.name) {
         input.setAttribute("name", attributs.name);
      }
      if (attributs.class) {
         input.setAttribute("class", attributs.class);
      }
      if (attributs.checked) {
         input.setAttribute("checked", "");
      }
      if (attributs.required) {
         input.setAttribute("class", attributs.required);
      }
      if (attributs.autofocus) {
         input.setAttribute("autofocus", "");
      }
      if (attributs.value) {
         input.setAttribute("value", attributs.value);
      }
      return input;
   },

   addCenter: function (parent, attributs) {
      var center;
      center = this.addElement(parent, "center");
      if (attributs.id) {
         center.setAttribute("id", attributs.id);
      }
      return center;
   },

   addInputSubmit: function (parent, attributs) {
      var input;
      input = this.addElement(parent, "button", "type", attributs.type);
      if (attributs.id) {
         input.setAttribute("id", attributs.id);
      }
      if (attributs.value) {
         input.setAttribute("value", attributs.value);
      }
      if (attributs.class) {
         input.setAttribute("class", attributs.class);
      }
      if (attributs.name) {
         input.setAttribute("name", attributs.name);
      }
      if (attributs.onclick) {
         input.setAttribute("onclick", attributs.onclick);
      }
      return input;
   },

   addTextarea: function (parent, attributs) {
      var textarea;
      textarea = this.addElement(parent, "textarea");
      if (attributs.id) {
         textarea.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         textarea.setAttribute("class", attributs.class);
      }
      if (attributs.name) {
         textarea.setAttribute("name", attributs.name);
      }
      if (attributs.placeholder) {
         textarea.setAttribute("placeholder", attributs.placeholder);
      }
      if (attributs.autofocus) {
         textarea.setAttribute("autofocus", "");
      }
      return textarea;
   },

   addInputCheckbox: function (parent, attributs) {
      var input;
      input = this.addElement(parent, "input", "type", "checkbox");
      if (attributs.id) {
         input.setAttribute("id", attributs.id);
      }
      if (attributs.value) {
         input.setAttribute("value", attributs.value);
      }
      if (attributs.name) {
         input.setAttribute("name", attributs.name);
      }
      return input;
   },

   addSelect: function (parent, attributs) {
      var select;
      select = this.addElement(parent, "select");
      if (attributs.id) {
         select.setAttribute("id", attributs.id);
      }
      if (attributs.name) {
         select.setAttribute("name", attributs.name);
      }
      if (attributs.class) {
         select.setAttribute("class", attributs.class);
      }
      return select;
   },

   addOption: function (parent, attributs) {
      var option;
      option = this.addElement(parent, "option");
      if (attributs.value) {
         option.setAttribute("value", attributs.value);
      }
      if (attributs.class) {
         option.setAttribute("selected", attributs.selected);
      }
      return option;
   },

   addP: function (parent, attributs) {
      var p;
      p = this.addElement(parent, "p");
      if (attributs.id) {
         p.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         p.setAttribute("class", attributs.class);
      }
      if (attributs.align) {
         p.setAttribute("align", attributs.align);
      }
      return p;
   },

   addA: function (parent, attributs) {
      var a;
      a = this.addElement(parent, "a");
      if (attributs.id) {
         a.setAttribute("id", attributs.id);
      }
      if (attributs.href) {
         a.setAttribute("href", attributs.href);
      }
      if (attributs.class) {
         a.setAttribute("class", attributs.class);
      }
      if (attributs.onclick) {
         a.setAttribute("onclick", attributs.onclick);
      }
      if (attributs.tabindex) {
         a.setAttribute("tabindex", attributs.tabindex);
      }
      return a;
   },

   addDiv: function (parent, attributs) {
      var div;
      div = this.addElement(parent, "div");
      if (attributs.id) {
         div.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         div.setAttribute("class", attributs.class);
      }
      if (attributs.style) {
         div.setAttribute("style", attributs.style);
      }
      return div;
   },

   addTable: function (parent, attributs) {
      var table;
      table = this.addElement(parent, "table");
      if (attributs.id) {
         table.setAttribute("id", attributs.id);
      }
       if (attributs.class) {
           table.setAttribute("class", attributs.class);
       }
      return table;
   },

    addTbody: function (parent, attributs) {
        var table;
        table = this.addElement(parent, "tbody");
        if (attributs.id) {
            table.setAttribute("id", attributs.id);
        }
        if (attributs.class) {
            table.setAttribute("class", attributs.class);
        }
        return table;
    },

   addTr: function (parent, attributs) {
      var tr;
      tr = this.addElement(parent, "tr");
      if (attributs.id) {
         tr.setAttribute("id", attributs.id);
      }
       if (attributs.class) {
           tr.setAttribute("class", attributs.class);
       }
      return tr;
   },

   addTd: function (parent, attributs) {
      var td;
      td = this.addElement(parent, "td");
      if (attributs.id) {
         td.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         td.setAttribute("class", attributs.class);
      }
      if (attributs.colspan) {
         td.setAttribute("colspan", attributs.colspan);
      }
      if (attributs.onclick) {
         td.setAttribute("onclick", attributs.onclick);
      }
      if (attributs.onmouseover) {
         td.setAttribute("onmouseover", attributs.onmouseover);
      }
      if (attributs.onmouseout) {
         td.setAttribute("onmouseout", attributs.onmouseout);
      }
      if (attributs.title) {
         td.setAttribute("title", attributs.title);
      }
      return td;
   },

   addUl: function (parent, attributs) {
      var ul;
      ul = this.addElement(parent, "ul");
      if (attributs.id) {
         ul.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         ul.setAttribute("class", attributs.class);
      }
      if (attributs.onclick) {
         ul.setAttribute("onclick", attributs.onclick);
      }
//    if (attributs.aria-labelledby) {
//       ul.setAttribute("aria-labelledby", attributs.aria-labelledby);
//    }
      if (attributs.onmouseout) {
         ul.setAttribute("onmouseout", attributs.onmouseout);
      }
      if (attributs.title) {
         ul.setAttribute("title", attributs.title);
      }
      return ul;
   },

   addLi: function (parent, attributs) {
      var li;
      li = this.addElement(parent, "li");
      if (attributs.value) {
         li.setAttribute("value", attributs.value);
      }
      if (attributs.class) {
         li.setAttribute("class", attributs.class);
      }
      if (attributs.onclick) {
         li.setAttribute("onclick", attributs.onclick);
      }
      if (attributs.tabindex) {
         li.setAttribute("tabindex", attributs.tabindex);
      }
      if (attributs.onmouseout) {
         li.setAttribute("onmouseout", attributs.onmouseout);
      }
      if (attributs.title) {
         li.setAttribute("title", attributs.title);
      }
      return li;
   },

   addImg: function (parent, attributs) {
      var img;
       img = this.addElement(parent, "img");
       if (attributs.src) {
          img.setAttribute("src", attributs.src);
       }
       if (attributs.class) {
          img.setAttribute("class", attributs.class);
       }
       if (attributs.id) {
          img.setAttribute("id", attributs.id);
       }
       if (attributs.title) {
          img.setAttribute("title", attributs.title);
       }
       if (attributs.onclick) {
          img.setAttribute("onclick", attributs.onclick);
       }
       return img;
   },

   addI: function (parent, attributs) {
      var i;
      i = this.addElement(parent, "i");
      if (attributs.src) {
         i.setAttribute("src", attributs.src);
      }
      if (attributs.class) {
         i.setAttribute("class", attributs.class);
      }
      if (attributs.id) {
         i.setAttribute("id", attributs.id);
      }
      if (attributs.title) {
         i.setAttribute("title", attributs.title);
      }
      if (attributs.onclick) {
         i.setAttribute("onclick", attributs.onclick);
      }
      return i;
   },

    addFooter: function (parent, attributs) {
        footer = this.addElement(parent, "footer");
        if (attributs.id) {
            footer.setAttribute("id", attributs.id);
        }
        if (attributs.class) {
            footer.setAttribute("class", attributs.class);
        }
        return footer;
    },

   addSpan: function (parent, attributs) {
      span = this.addElement(parent, "span");
      if (attributs.id) {
         span.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         span.setAttribute("class", attributs.class);
      }
      return span;
   },

    addStrong: function (parent, attributs) {
        strong = this.addElement(parent, "strong");
        if (attributs.id) {
            strong.setAttribute("id", attributs.id);
        }
        if (attributs.class) {
            strong.setAttribute("class", attributs.class);
        }
        return strong;
    },

    addH1: function (parent, attributs) {
        h1 = this.addElement(parent, "h1");
        if (attributs.id) {
            h1.setAttribute("id", attributs.id);
        }
        if (attributs.class) {
            h1.setAttribute("class", attributs.class);
        }
        return h1;
    },

   addH2: function (parent, attributs) {
      h2 = this.addElement(parent, "h2");
      if (attributs.id) {
         h2.setAttribute("id", attributs.id);
      }
      if (attributs.class) {
         h2.setAttribute("class", attributs.class);
      }
      return h2;
   },

    addH3: function (parent, attributs) {
        h2 = this.addElement(parent, "h3");
        if (attributs.id) {
            h2.setAttribute("id", attributs.id);
        }
        if (attributs.class) {
            h2.setAttribute("class", attributs.class);
        }
        return h2;
    },

   addHr: function (parent) {
      hr = this.addElement(parent, "hr");
      return hr;
   },

   getValeurChamp: function (champ) {
      var valeurChamp = champ;
      if (valeurChamp === null || valeurChamp.length === 0) {
         return null;
      }
      else {
         return valeurChamp;
      }
   },

   deconnection: function(){
      var rep = confirm("Etes-vous sûr de vouloir vous déconnecter");
      if(rep){
         autoConnect_Control.deleteLoginInfo();
         PluginView.loadLoginView();
      }
    }
};