class TasklistStatus {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("tasklist-status", "inline-block");
    this.ticks = [];
    this.createTick("high", "▷");
    this.createTick("todo", "☐");
    this.createTick("done", "✔");
    this.createTick("fail", "✘");
    this.createTick("info", "•");
    this.editor = null;
    this.element.onmouseup = (e) => {
      const editorView = atom.views.getView(atom.workspace.getActiveTextEditor());
      if (e.which === 1) {
        atom.commands.dispatch(editorView, "tasklist-tools:go-to-next-tick");
      } else if (e.which === 3) {
        atom.commands.dispatch(editorView, "tasklist-tools:toggle-tick");
      }
    };
    this.tooltipDisposable = atom.tooltips.add(this.element, {
      title: "Left: Go to next tick | Right: Toggle tick",
      keyBindingCommand: "tasklist-tools:go-to-next-tick",
      keyBindingTarget: atom.views.getView(atom.workspace),
    });
    this.subscribe();
  }

  subscribe() {
    this.oateSub = atom.workspace.observeActiveTextEditor((editor) => {
      if (this.odscSub) {
        this.odscSub.dispose();
      }
      if (editor && editor.getGrammar().scopeName === "text.tasklist") {
        this.editor = editor;
        this.update();
        this.odscSub = editor.onDidStopChanging(() => {
          this.update();
        });
      } else {
        this.hide();
      }
    });
  }

  destroy() {
    this.tooltipDisposable.dispose();
    this.editor = null;
    this.oateSub.dispose();
    if (this.odscSub) {
      this.odscSub.dispose();
    }
    this.element.remove();
  }

  createTick(name, tick) {
    let el = document.createElement("span");
    el.id = `${name}-counter`;
    el.classList.add("inline-block");
    el.name = name;
    el.tick = tick;
    el.count = 0;
    el.regExp = new RegExp("^ *" + el.tick, "gm");
    if (this.ticks.length > 0) {
      el.style.marginLeft = "0.5em";
    }

    let icon = document.createElement("span");
    icon.textContent = tick;
    icon.style.marginRight = "0.25em";
    el.appendChild(icon);

    let label = document.createElement("span");
    el.appendChild(label);
    el.label = label;

    this.element.appendChild(el);
    this.ticks.push(el);
  }

  updateTick(el, text) {
    el.count = (text.match(el.regExp) || []).length;
    el.label.textContent = el.count;
  }

  update() {
    if (!this.editor) {
      return this.hide();
    }
    let text = this.editor.getText();
    for (let el of this.ticks) {
      this.updateTick(el, text);
    }
    this.element.style.display = "inline-block";
  }

  hide() {
    this.element.style.display = "none";
  }
}

module.exports = { TasklistStatus };
