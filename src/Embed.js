const Embed = ({ url, alt }) => (
    <embed
      draggable={false}
      style={{ width: '70%', height: '50vh', position: 'relative'}}
      src={url}
      alt={alt}
    />
)
  
export default Embed

// <embed src="http://www.example.com" style="width:500px; height: 300px;">