import React, { Component, useState } from 'react'
import axios from 'axios'

class FileUpload extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cityImage: ''
        }
    }

    onFileChange(e) {
        this.setState({ cityImage: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('cityImage', this.state.cityImage)
        axios.post("http://localhost:5002/cities./", formData, {
        }).then(res => {
            console.log(res)
        })
    }

    
    render() {
        
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <h3>React File Upload</h3>
                        <div className="form-group">
                            <input type="file" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default FileUpload;