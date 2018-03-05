import React, { Component } from "react"
import { render } from "react-dom"

import Form from "react-jsonschema-form-semanticui-semanticui"

const step1schema = {
  title: "Step 1",
  type: "object",
  required: ["name"],
  properties: {
  	name: {type: "string", minLength: 3},
    email: {type: "string", format: "email", title: "Email"},
  }
}

const step2schema = {
  title: "Step 2",
  type: "object",
  required: ["age"],
  properties: {
    age: {type: "integer"}
  }
}

const step3schema = {
  title: "Last step",
  type: "object",
  required: ["interests"],
  properties: {
    interests: {type: "string"}
  }
}

const steps = [
  step1schema,
  step2schema,
  step3schema
]

class Steps extends React.Component {
  constructor(props) {
    super(props)
    this.state = {step: 1, formData: {}}
    this.goBack=this.goBack.bind(this);
  }
  
  goBack({formData}) {
    if (this.state.step > 1) {
      this.setState({step: this.state.step - 1})
      // ,
      //   formData: {
      //     ...this.state.formData, 
      //     ...formData
      //   }, 
      // })
    }
  }

  onSubmit = ({formData}) => {
  	if (this.state.step < steps.length) {
      this.setState({
        step: this.state.step + 1,
        formData: {
          ...this.state.formData, 
          ...formData
        }, 
      })
    } else {
      alert("You submitted " + JSON.stringify(formData, null, 2))
    }
  }
  
  render() {
    return (
      <Form 
        schema={steps[this.state.step-1]}
        onSubmit={this.onSubmit}
        formData={this.state.formData}>
        <div>
          <button type="button" onClick={this.goBack}>Back</button>
          <button type="submit">Submit</button>
        </div>
      </Form>
    )
  }
}

export default Steps