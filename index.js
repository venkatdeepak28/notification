const Notification = props => {
  //  Write your code here.
  const {className,src,name} = props
  return (
    <div className={className}>
        <img className="img" src={src} />
        <p className="inner-heading">{name}</p>
    </div>
  )
}

const element = (
  //  Write your code here.   
  <div className="bg-container">
          <h1 className="main-heading">Notification</h1>
          <div>
            <Notification className="blue-container" src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" name="Information Message" />
            <Notification className="green-container" src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" name="Success Message" />
            <Notification className="warning-container" src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" name="Warning Message" />
            <Notification className="error-container" src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" name="Error Message" />
          </div>
      </div>
)

ReactDOM.render(element, document.getElementById('root'))
