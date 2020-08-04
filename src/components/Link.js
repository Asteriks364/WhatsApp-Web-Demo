import React from 'react';

class Link extends React.Component {
	state = {
		isOpen: false
	};

	clickLink = () => {
		this.setState((state) => {
			return {
				isOpen: !state.isOpen
			};
		});
	};

	render() {
		return (
		  <div className={`link ${this.state.isOpen ? 'link_active' : ''}`}>
			  <div role="button"
			       title={this.props.title}
			       onClick={this.clickLink}>
					  <span>
						  {this.props.children}
					  </span>
			  </div>
		  </div>
		);
	}
}

export default Link;