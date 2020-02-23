import React from 'react'
import { connect } from 'react-redux'
import { removeNote, TAG_ALL } from '../redux/actions/actions';
import { Button, Row, Col, Tag, Icon } from 'antd';
import './NoteForm_List.css';

class NotesItem extends React.Component {
  render() {
    let visibility = this.props.visibility;
    let tagFilter = this.props.tagFilter;
    let notes = this.props.notes.filter(note => note.status === visibility);
    let filteredNotes;
    if(notes.length > 0) {
      if(tagFilter === TAG_ALL) {
        filteredNotes = notes;
      } else {
        filteredNotes = notes.filter(note => note.tag === tagFilter);
      }
      return (
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <ul id="note-list-ul">
                {filteredNotes.map((note, index) => (
                  <li key={note.id} style={{ backgroundColor: index % 2 === 0 ? "#f7f7f7" : "white" }}>
                    <Row>
                      <Col span={4}>
                        <Tag color={note.tag === "TAG_GENERAL" ? "geekblue" : note.tag === "TAG_IMPORTANT" ? "orange" : "" }>{note.tag === "TAG_GENERAL" ? "general" : note.tag === "TAG_IMPORTANT" ? "important" : "other" }</Tag>
                      </Col>
                      <Col span={16}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>  
                        <hr />    
                        <span>Due: {note.dueDate[0]} - {note.dueDate[1]}</span>
                        <br />
                        <span className="txt-date">created: {note.createdDate}</span>
                      </Col>
                      <Col span={4} style={{ textAlign: 'right', height: '100%' }}>
                        <Button className="remove-btn" type="danger" icon="close" shape="circle" size="small" 
                          onClick={() => this.props.removeNote(note.id)}
                        />
                      </Col>
                    </Row>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
      )
    } else {
      return (
        <Row style={{ marginTop: "20px" }} type="flex" justify="center">
          <span id="empty-notice"><Icon type="file-exclamation" /> Empty Note</span>
        </Row>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    visibility: state.visibility,
    tagFilter: state.tagFilter
  }
}

const mapDispatchToProps = {
  removeNote: removeNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesItem)