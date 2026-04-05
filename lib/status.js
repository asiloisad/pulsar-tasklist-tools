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
    this.element.onclick = (e) => {
      const tick = e.target.closest("[id$='-counter']");
      if (tick) this.onClickTick(tick);
    };
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

  onClickTick(el) {
    let curPos = this.editor.getCursorBufferPosition();
    this._pass = false;
    this.editor.scanInBufferRange(
      el.regExp,
      [
        [curPos.row + 1, 0],
        [1e9, 1e9],
      ],
      (iterator) => {
        this.editor.setCursorBufferPosition([iterator.range.end.row, 1e9], {
          autoscroll: true,
        });
        iterator.stop();
        this._pass = true;
      },
    );
    if (!this._pass) {
      this.editor.scanInBufferRange(
        el.regExp,
        [
          [0, 0],
          [curPos.row + 1, 0],
        ],
        (iterator) => {
          this.editor.setCursorBufferPosition([iterator.range.end.row, 1e9], {
            autoscroll: true,
          });
          iterator.stop();
          this._pass = true;
        },
      );
    }
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
