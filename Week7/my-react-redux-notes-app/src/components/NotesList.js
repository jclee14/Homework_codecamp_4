import React from 'react'
import { connect } from 'react-redux'
import { showActive, showInActive, showFilterTag } from '../redux/actions/actions';
import { Button, Row, Col } from 'antd';
import './NoteForm_List.css';
import NotesItem from './NotesItem';
import { STATUS_ACTIVE, STATUS_INACTIVE, TAG_ALL } from '../redux/actions/actions'; 

const ButtonGroup = Button.Group;

class NotesList extends React.Component {
/*   constructor(props) {
    super(props);

    this.state = {
      filterTag: 'TAG_ALL',
    };
  }

  handleShowFilterTag = (selectedTag) => {
    this.setState({ filterTag: selectedTag });
  } */

  render() {
    let visibility = this.props.visibility;
    let tagFilter = this.props.tagFilter;
    const propsTags = this.props.tags;
/*     const tagItems = propsTags.map((tag) => {
      return tag.substring(4,tag.length).toLowerCase();
    }) */
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
                <Button type={tagFilter === TAG_ALL ? "primary" : "dashed"} onClick={ () => this.props.showFilterTag(TAG_ALL)} >
                  All Tags
                </Button>
                {
                  propsTags.map((tagItem) => (
                    <Button type={tagFilter === tagItem.tagName ? "primary" : "dashed"} onClick={ () => this.props.showFilterTag(tagItem.tagName) } >
                      { tagItem.tagName[4] + tagItem.tagName.substring(5,tagItem.tagName.length).toLowerCase() }
                    </Button>
                  ))
                }
{/*                 <Button type={tagFilter === TAG_ALL ? "primary" : "dashed"} onClick={ () => this.props.showAllTag()} >
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
                </Button> */}
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
    tagFilter: state.tagFilter,
    tags: state.tags,
  }
}

const mapDispatchToProps = {
  showActive: showActive,
  showInActive: showInActive,
  showFilterTag: showFilterTag,
/*   showAllTag: showAllTag,
  showGeneralTag: showGeneralTag,
  showImportantTag: showImportantTag,
  showOtherTag: showOtherTag, */
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)