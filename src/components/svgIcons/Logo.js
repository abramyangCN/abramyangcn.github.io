import React from "react"

const Logo = () => {
  return (
    <div
      style={{
        width: "100%",
        paddingTop: "100%",
        position: "relative",
        minWidth: "50px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <svg x="0px" y="0px" viewBox="0 0 800 1280">
            <g id="layer">
              <g id="layer_v" transform="translate(0, -300)">
                <path
                  id="v"
                  d="M601.4,663.8c-6.9,160.8-84,303.5-201.4,398.2c-117.4-94.7-194.4-237.3-201.4-398.2
			c-47.1,18.9-91.4,44.3-131.4,75.5C97.9,948.8,224,1127.2,400,1229c176-101.8,302.1-280.3,332.8-489.7
			C692.7,708.1,648.5,682.7,601.4,663.8z"
                />
              </g>
              <g id="layer_i_a" transform="translate(0, 220)">
                <g id="layer_i">
                  <path
                    id="i"
                    d="M400,406.8c96.3,140.5,96.3,325.8,0,466.4C303.7,732.7,303.7,547.3,400,406.8L400,406.8z"
                  />
                </g>
                <g id="layer_a">
                  <path
                    id="a"
                    d="M198.6,663.8c-0.3-7.9-0.5-15.8-0.5-23.8c0-170.5,78.8-322.6,201.9-422c123.1,99.3,201.9,251.4,201.9,422
				c0,8-0.2,15.9-0.5,23.8c47.1,18.9,91.4,44.3,131.4,75.5c4.8-32.9,7.2-66.1,7.2-99.3c0-251.7-136.8-471.4-340-589
				C196.8,168.6,60,388.3,60,640c0,33.2,2.4,66.4,7.2,99.3C107.3,708.1,151.5,682.7,198.6,663.8z"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Logo
