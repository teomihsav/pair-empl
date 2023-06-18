import React from "react";

export default class TestClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 7,
		};
	}

	componentDidMount() {
		const myTimer = setInterval(() => {
			console.log(":", this.state.count);

			this.state.count > 0
				? this.setState({ count: (this.state.count -= 1) })
				: clearInterval(myTimer);
		}, 1000);
	}

	render() {
		return (
			<div style={this.props}>
				<h1>
					NASA Countdown: <br /> {this.state.count || "🪐"} <br />
					{"⭐".repeat(this.state.count) || "🚀"}
				</h1>
				{this.state.count === 0 && <h2>LIFT OFF!!!</h2>}
			</div>
		);
	}
}