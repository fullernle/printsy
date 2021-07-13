import React, { Component } from 'react'

export default class Cart extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.fetchCart(this.props.currUserId)
	}
	
	render() {
		if (this.props.cart === null) {
			return null
		}
		return (
			<div>
				hi
			</div>
		)
	}
}
