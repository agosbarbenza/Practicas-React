import React from 'react';

const UserOutput = (props)=>{
    return(
        <div>
            <p className="paragraph">Hello <span style={props.style} className="span">{props.user}</span>, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lobortis condimentum sapien vel vestibulum. Proin interdum dui eget nisi blandit, non vehicula purus laoreet. Vestibulum vel ipsum ac tellus ultricies blandit sed vitae justo. </p>
            <p className="paragraph"> User Praesent dui nulla, efficitur sed enim iaculis, mollis feugiat mi. Ut aliquet augue eu quam ultrices, id rutrum tellus congue. Fusce hendrerit bibendum suscipit. Maecenas vel congue augue. Sed cursus fermentum leo eget tincidunt. Vestibulum in feugiat leo.</p>
        </div>
    )
}

  export default UserOutput;