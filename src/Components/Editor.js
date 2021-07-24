import React, { useContext, useEffect, useState } from "react";
import TuiImageEditor from "tui-image-editor";
import D from "../Assets/D.png";
import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import { UIContext } from "../Context/UIContext";
// import icona from "tui-image-editor/dist/svg/icon-a.svg";
// import iconb from "tui-image-editor/dist/svg/icon-b.svg";
// import iconc from "tui-image-editor/dist/svg/icon-c.svg";
// import icond from "tui-image-editor/dist/svg/icon-d.svg";

const myTheme = {
  "common.bi.image": `${D}`,
  "common.bisize.width": "auto",
  "common.bisize.height": "auto",
  "common.backgroundImage": "./img/bg.png",
  "common.backgroundColor": "#fff",
  "common.border": "0",

  // header
  "header.backgroundImage": "none",
  "header.backgroundColor": "#000000", //transparent
  "header.border": "0px",

  // load button
  "loadButton.backgroundColor": "#fff",
  "loadButton.border": "1px solid #ddd",
  "loadButton.color": "#222",
  "loadButton.display": "none",
  "loadButton.fontFamily": "'Noto Sans', sans-serif",
  "loadButton.fontSize": "12px",

  // download button
  "downloadButton.backgroundColor": "#ff3366",
  "downloadButton.border": "1px solid #ff3366",
  "downloadButton.borderRadius": "4px",
  "downloadButton.color": "#fff",
  "downloadButton.fontFamily": "'Noto Sans', sans-serif",
  "downloadButton.fontSize": "14px",

  // main icons
  "menu.normalIcon.color": "#8a8a8a",
  "menu.activeIcon.color": "#555555",
  "menu.disabledIcon.color": "#434343",
  "menu.hoverIcon.color": "#e9e9e9",
  "menu.iconSize.width": "24px",
  "menu.iconSize.height": "24px",

  // submenu icons
  "submenu.normalIcon.color": "#8a8a8a",
  "submenu.activeIcon.color": "#555555",
  "submenu.iconSize.width": "32px",
  "submenu.iconSize.height": "32px",

  // submenu primary color
  "submenu.backgroundColor": "transparent",
  "submenu.partition.color": "#e5e5e5",

  // submenu labels
  "submenu.normalLabel.color": "#858585",
  "submenu.normalLabel.fontWeight": "normal",
  "submenu.activeLabel.color": "#000",
  "submenu.activeLabel.fontWeight": "normal",

  // checkbox style
  "checkbox.border": "1px solid #ccc",
  "checkbox.backgroundColor": "#fff",

  // rango style
  "range.pointer.color": "#333",
  "range.bar.color": "#ccc",
  "range.subbar.color": "#606060",

  "range.disabledPointer.color": "#d3d3d3",
  "range.disabledBar.color": "rgba(85,85,85,0.06)",
  "range.disabledSubbar.color": "rgba(51,51,51,0.2)",

  "range.value.color": "#000",
  "range.value.fontWeight": "normal",
  "range.value.fontSize": "11px",
  "range.value.border": "0",
  "range.value.backgroundColor": "#f5f5f5",
  "range.title.color": "#000",
  "range.title.fontWeight": "lighter",
};
class ImageEditor extends React.Component {
  rootEl = React.createRef();
  imageEditorInst = null;

  componentDidMount() {
    this.imageEditorInst = new TuiImageEditor(this.rootEl.current, {
      ...this.props,
    });

    this.bindEventHandlers(this.props);
  }

  componentWillUnmount() {
    this.unbindEventHandlers();

    this.imageEditorInst.destroy();

    this.imageEditorInst = null;
  }

  shouldComponentUpdate(nextProps) {
    this.bindEventHandlers(this.props, nextProps);

    return false;
  }

  getInstance() {
    return this.imageEditorInst;
  }

  getRootElement() {
    return this.rootEl.current;
  }

  bindEventHandlers(props, prevProps) {
    Object.keys(props)
      .filter(this.isEventHandlerKeys)
      .forEach((key) => {
        const eventName = key[2].toLowerCase() + key.slice(3);
        // For <ImageEditor onFocus={condition ? onFocus1 : onFocus2} />
        if (prevProps && prevProps[key] !== props[key]) {
          this.imageEditorInst.off(eventName);
        }
        this.imageEditorInst.on(eventName, props[key]);
      });
  }
  unbindEventHandlers() {
    Object.keys(this.props)
      .filter(this.isEventHandlerKeys)
      .forEach((key) => {
        const eventName = key[2].toLowerCase() + key.slice(3);
        this.imageEditorInst.off(eventName);
      });
  }
  isEventHandlerKeys(key) {
    return /on[A-Z][a-zA-Z]+/.test(key);
  }

  render() {
    return <div ref={this.rootEl} />;
  }
}

export default function App() {
  const { state } = useContext(UIContext);
  const [s, setS] = useState(state.selected);
  useEffect(() => {
    setS(state.selected);
    return () => {};
  }, [state.selected]);

  let props = {
    includeUI: {
      menu: [
        "crop",
        "flip",
        "rotate",
        "draw",
        "shape",
        "icon",
        "text",
        "mask",
        "filter",
      ],
      initMenu: "filter",
      theme: { ...myTheme },
      // theme: " whiteTheme",
      loadImage: {
        path: state.files[s]?.decoded_img,
        name: "abc",
      },
      uiSize: {
        width: "100vw",
        height: "150vh",
      },
      menuBarPosition: "bottom",
    },
    cssMaxWidth: 700,
    cssMaxHeight: 700,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  };

  return (
    <div>
      <ImageEditor {...props} />
    </div>
  );
}
