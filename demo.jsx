import { FormInput } from "@builder.io/components";

export default function MyComponent(props) {
  return (
    <>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          marginTop: "-13px",
          paddingBottom: "0px",
          marginBottom: "-1px",
          fontFamily: '"sans-serif", sans-serif',
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            position: "relative",
            marginLeft: "20px",
            height: "53px",
            width: "61px",
          }}
        ></div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            marginTop: "auto",
            lineHeight: "normal",
            textAlign: "center",
            paddingRight: "19px",
            paddingLeft: "0px",
            marginBottom: "auto",
            marginLeft: "auto",
            fontSize: "11px",
          }}
        >
          <a
            css={{
              display: "flex",
              flexDirection: "column",
              alignItems: "stretch",
              marginTop: "auto",
              marginBottom: "auto",
            }}
          >
            <div
              css={{
                marginLeft: "auto",
              }}
            >
              <div>
                <div>Log in</div>
              </div>
            </div>
          </a>
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              position: "relative",
              marginTop: "auto",
              lineHeight: "normal",
              textAlign: "center",
              paddingRight: "19px",
              paddingLeft: "0px",
              marginLeft: "auto",
              marginBottom: "auto",
            }}
          ></div>
          <a
            css={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              css={{
                marginLeft: "auto",
              }}
            >
              <div>
                <div>Sign up</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          marginTop: "-5px",
          paddingBottom: "30px",
          marginBottom: "-1px",
          fontFamily: '"sans-serif", sans-serif',
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            marginTop: "auto",
            lineHeight: "normal",
            textAlign: "center",
            paddingRight: "23px",
            paddingLeft: "23px",
            marginBottom: "auto",
          }}
        >
          <a>
            <div>
              <div>
                <div>Home</div>
              </div>
            </div>
          </a>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            marginTop: "auto",
            lineHeight: "normal",
            textAlign: "center",
            paddingRight: "23px",
            paddingLeft: "23px",
            marginBottom: "auto",
          }}
        >
          <a>
            <div>
              <div>
                <div>Products</div>
              </div>
            </div>
          </a>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            marginTop: "auto",
            lineHeight: "normal",
            textAlign: "center",
            paddingRight: "23px",
            paddingLeft: "23px",
            marginBottom: "auto",
          }}
        >
          <a>
            <div>
              <div>
                <div>Contact</div>
              </div>
            </div>
          </a>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            marginTop: "auto",
            lineHeight: "normal",
            textAlign: "center",
            paddingRight: "23px",
            paddingLeft: "23px",
            marginBottom: "auto",
          }}
        >
          <a>
            <div>
              <div>
                <div>About us</div>
              </div>
            </div>
          </a>
        </div>
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            marginTop: "auto",
            lineHeight: "normal",
            textAlign: "center",
            paddingRight: "19px",
            paddingLeft: "0px",
            marginBottom: "auto",
            marginLeft: "auto",
          }}
        ></div>
        <FormInput
          type="text"
          placeholder="Search"
          name="Search"
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            position: "relative",
            marginLeft: "20px",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
            borderRadius: "3px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "#ccc",
          }}
        ></FormInput>
      </div>
    </>
  );
}