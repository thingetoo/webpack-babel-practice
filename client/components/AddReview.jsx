class AddReview extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      summary: '',
      recommend: true,
      response: '',
      body: '',
      name: '',
      email: '',
      characterisitcs: {
        size: {},
        comfot: {}
      }
      helpfulness: 0,
      photos: []
    }
  }

  handleSummary(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleBody(e) {
    this.setState({
      body: e.target.value
    })
  }


  render() {

    return (
      <div>
        <div>Write Your Reiview</div>
        <div>About the </div>
      </div>
    )
  }
}

export default Review;