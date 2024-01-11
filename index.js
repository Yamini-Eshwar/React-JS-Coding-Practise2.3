const Box = props => {
  const {className, boxText} = props
  return (
    <div className={`box ${className}`}>
      <p>{boxText}</p>
    </div>
  )
}

const element = (
  <div className='main-container'>
    <h1>Boxes</h1>
    <div className='box-con'>
      <Box className='box box-small' boxText='Small' />
      <Box className='box box-meduim' boxText='Meduim' />
      <Box className='box box-large' boxText='Large' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
