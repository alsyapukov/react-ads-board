import React, { Component } from "react";
import cn from 'classnames/bind';
import s from './dropZone.module.scss'

import SortList from './SortList'

let cx = cn.bind(s);

class DropZone extends Component {

  state = {
    zone: false,
    files: []
  }

  dropZone = (val) => {
    this.setState({
      zone: val
    })
  }

  refLol = () => React.createRef();

  handleFilesUpload = (e) => {
    Object.entries(e).map(([key, value]) => {
      if(/\.(jpe?g|png|gif)$/i.test(value.name)) {
        this.setState((state) => ({
          files: [...state.files, {
            file: value,
            url: URL.createObjectURL(value)
          }]
        }))
      }
    })
    this.props.images(Object.values(e))
  }

  sort = (val) => {
    this.props.images(val)
    this.setState({
      files: val
    })
  }

  render() {
    return (
      <div 
        className={cx(
          s.dropZone,
          { drag: this.state.zone }
        )}
        onDrop={() => this.dropZone(false)}
        onDragOver={() => this.dropZone(true)}
      >
        <label
          className={s.zone}
          htmlFor="file"
        >
          <input
            className={s.input}
            type="file"
            id="file"
            multiple
            ref={this.refLol}
            onChange={(e) => this.handleFilesUpload(e.target.files)}
            onDragLeave={() => this.dropZone(false)}
          />
        </label>
        <p className={s.dragText}>
          <span>Перетащите сюда файлы или&nbsp;</span>
          <label className={s.selectFiles} htmlFor="file">
            выберите на компьютере
            </label>
        </p>
        <SortList items={this.state.files} lockAxis="xy" axis="xy" sort={(e) => this.sort(e)}/>
      </div>
    );
  }
}
export default DropZone;