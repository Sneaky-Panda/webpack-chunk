import React, {Component} from 'react';

export default class DynamicImport extends Component {

    constructor(props){
        super(props);
        this.state = {
            component:null
        }
    }

    componentDidMount () {
        this.props.load()
            .then((component) => {
                this.setState(() => ({
                    component: component.default ? component.default : component
                }))
            })
    }

    render() {
        return this.props.children(this.state.component)
    }
}