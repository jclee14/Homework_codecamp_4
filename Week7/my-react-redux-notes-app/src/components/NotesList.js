import React from 'react'
import { connect } from 'react-redux'
import { showActive, showInActive, showAllTag, showGeneralTag, showImportantTag, showOtherTag } from '../redux/actions/actions';
import { Button, Row, Col } from 'antd';
import './NoteForm_List.css';
import NotesItem from './NotesItem';
import { STATUS_ACTIVE, STATUS_INACTIVE, TAG_ALL, TAG_GENERAL, TAG_IMPORTANT, TAG_OTHER } from '../redux/actions/actions';

const ButtonGroup = Button.Group;

class NotesList extends React.Component {
  render() {
    let visibility = this.props.visibility;
    let tagFilter = this.props.tagFilter;
    return (
      <>
          <h2>Notes</h2>
          <Row type="flex" justify="center">
            <Col span={9}>
              <Button type={visibility === STATUS_ACTIVE ? "primary" : "dashed"} onClick={ () => this.props.showActive() } className="form-btn" >
                Active Notes
              </Button>
            </Col>
            <Col span={2}></Col>
            <Col span={9}>
              <Button type={visibility === STATUS_INACTIVE ? "danger" : "dashed"} onClick={ () => this.props.showInActive() } className="form-btn" >
                Inactive Notes
              </Button>
            </Col>
          </Row>
          <br />
          <Row type="flex" justify="center">
            <Col>
              <ButtonGroup className="tag-btn-group" style={{ witdh: "100%" }}>
                <Button type={tagFilter === TAG_ALL ? "primary" : "dashed"} onClick={ () => this.props.showAllTag()} >
                  All Tags
                </Button>
                <Button type={tagFilter === TAG_GENERAL ? "primary" : "dashed"} onClick={ () => this.props.showGeneralTag()} >
                  General Tag
                </Button>
                <Button type={tagFilter === TAG_IMPORTANT ? "primary" : "dashed"} onClick={ () => this.props.showImportantTag()} >
                  Important Tag
                </Button>
                <Button type={tagFilter === TAG_OTHER ? "primary" : "dashed"} onClick={ () => this.props.showOtherTag()} >
                  Other Tag
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
{/*           <Row type="flex">
            <Col span={6}>
              <Button type={tagFilter === TAG_ALL ? "primary" : "dashed"} onClick={ () => this.props.showAllTag()} className="form-btn" >
                All Tags
              </Button>
            </Col>
            <Col span={6}>
              <Button type={tagFilter === TAG_GENERAL ? "primary" : "dashed"} onClick={ () => this.props.showGeneralTag()} className="form-btn" >
                General Tag
              </Button>
            </Col>
            <Col span={6}>
              <Button type={tagFilter === TAG_IMPORTANT ? "primary" : "dashed"} onClick={ () => this.props.showImportantTag()} className="form-btn" >
                Important Tag
              </Button>
            </Col>
            <Col span={6}>
              <Button type={tagFilter === TAG_OTHER ? "primary" : "dashed"} onClick={ () => this.props.showOtherTag()} className="form-btn" >
                Other Tag
              </Button>
            </Col>
          </Row> */}
          <NotesItem />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    visibility: state.visibility,
    tagFilter: state.tagFilter
  }
}

const mapDispatchToProps = {
  showActive: showActive,
  showInActive: showInActive,
  showAllTag: showAllTag,
  showGeneralTag: showGeneralTag,
  showImportantTag: showImportantTag,
  showOtherTag: showOtherTag,
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)