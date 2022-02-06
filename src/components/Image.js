
const Image = ({ url, alt }) => (
    <img
      draggable={false}
      style={{ width: '45%', position: 'relative' }}
      src={url}
      alt={alt}
    />
  )
  
export default Image  