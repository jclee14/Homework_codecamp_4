import React from 'react';
import { connect } from 'react-redux';
import { addNote, increaseId } from '../redux/actions/actions';
import './NoteForm_List.css';
import { Form, Button, Input, Icon, Select, DatePicker, Modal, Divider } from 'antd';

const { TextArea } = Input;
const { Option } = Select;
const { RangePicker } = DatePicker;

const rangeConfig = {
  rules: [{ type: 'array', required: true, message: 'Please select time!' }],
};

class NoteForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      tag: '',
      tagItems: ['TAG_GENERAL', 'TAG_IMPORTANT', 'TAG_OTHER'],
      tagModalVisible: false,
      newTagInput: '',
    }
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSelectChange = (value) => {
    this.setState({ tag: value });
  };

  showModal = () => {
    console.log('showmodal');
    this.setState({
      tagModalVisible: true,
    });
  };

  handleNewTagInput = (event) => {
    this.setState({
      newTagInput: event.target.value
    })
  }

  handleAddTag = () => {
    this.handleModalCancel();
    
    this.setState(prevState => ({
      ...prevState,
      tagItems: [...prevState.tagItems, prevState.newTagInput],
      newTagInput: '',
    }));
  };

  handleModalCancel = e => {
    console.log(e);
    this.setState({
      tagModalVisible: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        let title = this.state.title;
        let content = this.state.content;
        let tag = this.state.tag;

        let localStr = JSON.parse(localStorage.getItem('persist:root'));
        let id = localStr.id;

        let timestamp = Date.now();
        let createdDate = new Intl.DateTimeFormat('en-GB', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false}).format(timestamp);

        const rangeTimeValue = fieldsValue['range-time-picker'];
        const values = {
          ...fieldsValue,
          'range-time-picker': [
            rangeTimeValue[0].format('DD-MM-YYYY HH:mm'),
            rangeTimeValue[1].format('DD-MM-YYYY HH:mm'),
          ]
        };

        const dueDate = values['range-time-picker'];

        this.props.addNote(id, title, content, dueDate, tag, createdDate);
        this.props.increaseId();
    
        this.setState({ title: '', content: '' });
        this.props.form.resetFields();
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { tagItems } = this.state;
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Item label="Title" className="form-input">
          {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
              onChange: this.handleTitleChange,
          })(
              <Input
                prefix={<Icon type="form" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Title" allowClear
              />,
          )}
        </Form.Item>

{/*         Title: <br />
        <input type="text" name="title" onChange={this.handleTitleChange} value={this.state.title} />
        <br /> */}

        <Form.Item label="Content" className="form-input">
          {getFieldDecorator('content', {
              rules: [{ required: true, message: 'Please input your note content!' }],
              onChange: this.handleContentChange,
          })(
              <TextArea rows={5} allowClear />,
          )}
        </Form.Item>

{/*         <textarea
          name="content"
          cols="30"
          rows="5"
          onChange={this.handleContentChange}
          value={this.state.content}
        />
        <br /> */}

        <Form.Item label="Due date" className="form-input">
          {getFieldDecorator('range-time-picker', rangeConfig)(
            <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
          )}
        </Form.Item>

        <Form.Item label="Tag">
          {getFieldDecorator('tag', {
            rules: [{ required: true, message: 'Please select your tag!' }],
          })(
            <Select
              placeholder="custom dropdown render"
              onChange={this.handleSelectChange}
              dropdownRender={menu => (
                <div>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  <div
                    style={{ padding: '4px 8px', cursor: 'pointer' }}
                    onMouseDown={e => e.preventDefault()}
                    onClick={this.showModal}
                  >
                    <Icon type="edit" /> Edit Tags
                  </div>
                </div>
              )}
            >
              {tagItems.map(item => (
                <Option key={item}>{item}</Option>
              ))}
            </Select>,
          )}
        </Form.Item>

{/*         <Form.Item label="Tag">
          {getFieldDecorator('tag', {
            rules: [{ required: true, message: 'Please select your tag!' }],
          })(
            <Select
              placeholder="Select your note tag here"
              onChange={this.handleSelectChange}
            >
              <Option value="TAG_GENERAL">general</Option>
              <Option value="TAG_IMPORTANT">important</Option>
              <Option value="TAG_OTHER">other</Option>
            </Select>,
          )}
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit" className="form-btn">
            Add Note
          </Button>
        </Form.Item>
      </Form>
      <Modal
          title="Basic Modal"
          visible={this.state.tagModalVisible}
/*           onOk={this.handleModalOk} */
          onCancel={this.handleModalCancel}
          footer={[
            <Button type="danger" onClick={this.handleModalCancel}>
              Cancel
            </Button>,
            <Button type="primary" onClick={this.handleAddTag}>
              Add
            </Button>
          ]}
        >
          <Input
            onChange={ this.handleNewTagInput }
            placeholder="Enter New Tag Here"
          />
          <Select
              placeholder="Select your note tag here"
              onChange={this.handleSelectChange}
            >
              <Option value="TAG_GENERAL">general</Option>
              <Option value="TAG_IMPORTANT">important</Option>
              <Option value="TAG_OTHER">other</Option>
          </Select>
      </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = {
  addNote: addNote,
  increaseId: increaseId,
};

const WrappedNoteForm = Form.create()(NoteForm)

export default connect(null, mapDispatchToProps)(WrappedNoteForm);