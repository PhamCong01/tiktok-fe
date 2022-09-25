import { Button } from "@mui/material";
import React from "react";
import Hashtag from "../imageSvg/Hashtag";
import IconACong from "../imageSvg/Icon@";
import Upload from "../imageSvg/Upload";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Checkbox from "@mui/material/Checkbox";

import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Footer from "../Footer";
import {
  generateVideoThumbnails,
  importFileandPreview,
} from "@rajesh896/video-thumbnails-generator";

function UploadContent() {
  let hidenFileInput: HTMLInputElement | null;
  const [age, setAge] = React.useState("");
  const [urlVideoDemo, setUrlVideoDemo] = React.useState("");
  const [videoThumb, setVideoThumb] = React.useState("");
  const [nameVideo, setNameVideo] = React.useState("");
  const [titleVideo, setTitleVideo] = React.useState("");
  const [thumbnails, setThumbnails] = React.useState([]);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  // checkbox
  const [checked, setChecked] = React.useState(true);

  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  // swtich
  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const handlerOpenUploadVideo = () => {
    if (hidenFileInput) {
      hidenFileInput.click();
    }
  };

  const handlerUploadVideo = async (e: any) => {
    const file: any = e.target.files[0];
    const urlDemo = URL.createObjectURL(file);
    const nameVideo = file.name.split(".")[0]
    if (urlDemo) {
      setNameVideo(nameVideo)
      importFileandPreview(file).then((res) => {
        setUrlVideoDemo(res);
        setVideoThumb("");
        setThumbnails([]);
      });
      await generateVideoThumbnails(file, 5, "thumbs").then(
        (thumbs: any): any => {
          setThumbnails(thumbs);
        }
      );
    }
  };
  return (
    <>
      <div className="w-[80%] pb-[100px] shadow-2xl mb-[15px] rounded-lg mt-[100px] my-0 mx-auto py-[20px] px-[50px]">
        <h1 className="text-[30px] mb-[5px] font-medium">Upload video</h1>
        <p className="text-[20px] text-[#999] font-[300]">
          Post videos to your account
        </p>
        <div>
          <div className="mt-[30px] flex justify-center">
            {urlVideoDemo ? (
              <div className="relative border-[2px] rounded-xl w-[30%] mr-[20px] h-[60vh]">
                <div className="absolute h-full w-full">
                  <video
                    poster={videoThumb}
                    controls
                    autoPlay
                    src={urlVideoDemo}
                    className="rounded-xl h-full object-cover w-full"
                  >
                    <source src={urlVideoDemo} />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ) : (
              <div className="relative border-[2px] rounded-xl hover:border-[red] hover:bg-[#f4f3f3] w-[30%] mr-[20px] h-[60vh] border-dashed">
                <div
                  className="absolute w-[100%] flex justify-center flex-col items-center text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                  onClick={handlerOpenUploadVideo}
                >
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={(refParam) => (hidenFileInput = refParam)}
                    accept="video/*"
                    onChange={handlerUploadVideo}
                  />
                  <Upload />
                  <h2 className="text-[18px] font-medium mt-[25px] mb-[15px]">
                    Select video to upload
                  </h2>
                  <p className="text-[#999]">Or drag and drop files</p>
                  <p className="text-[#999] my-[7px]">MP4 or WebCODE</p>
                  <p className="text-[#999] my-[7px]">
                    Resolution 720x1280 or <br /> higher
                  </p>
                  <p className="text-[#999] my-[7px]">
                    Up to 10 minutes <br /> Less than 2 GB
                  </p>
                  <button className="w-[80%] mt-[10px] py-[8px] bg-[#fe2c55] rounded-sm text-[#fff] font-medium">
                    Select files
                  </button>
                </div>
              </div>
            )}
            <div className="w-[70%]">
              <div>
                <span className="flex items-center justify-between">
                  <p className="font-medium">Note</p>
                  <span className="text-[#999]">0/150</span>
                </span>
                <div className="mt-[10px] flex justify-between border border-gray-500">
                  <input
                    className="w-full p-[12px] rounded-sm outline-none break-words"
                    type="text"
                    defaultValue={nameVideo || ""}
                    value={titleVideo}
                    onChange={(e) => setTitleVideo(e.target.value)}
                  />

                  <span className="h-full m-auto flex items-center">
                    <IconACong />
                    <span className="mx-[10px]">
                      <Hashtag />
                    </span>
                  </span>
                </div>
              </div>

              <div className="mt-[30px]">
                <h4 className="font-medium mb-[10px]">Cover image</h4>
                <div className="flex items-center border rounded-sm border-gray-600 min-h-[200px] p-[10px] relative">
                  {urlVideoDemo && thumbnails.length > 0 ? (
                    thumbnails.map((thumbs, index) => {
                      return (
                        <div key={index} onClick={() => setVideoThumb(thumbs)}>
                          <img
                            className="h-full cursor-pointer"
                            src={thumbs}
                            alt="video"
                          />
                        </div>
                      );
                    })
                  ) : (
                    <div className="min-h-[200px] bg-[#f2f2f2] w-[15%] rounded-sm"></div>
                  )}
                </div>
              </div>

              <div className="mt-[20px]">
                <h4 className="font-medium mb-[10px]">
                  Who can watch this video
                </h4>
                <div>
                  <FormControl style={{ minWidth: 270 }}>
                    <InputLabel id="demo-simple-select-label">Public</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Public</MenuItem>
                      <MenuItem value={20}>Friend</MenuItem>
                      <MenuItem value={30}>Private</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="mt-[30px]">
                <h4 className="font-medium mb-[6px]">Allows user to:</h4>
                <div className="flex items-center">
                  <span className="flex items-center mr-[15px]">
                    <Checkbox
                      checked={checked}
                      onChange={handleChangeCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <p>Comment</p>
                  </span>
                  <div className="flex items-center mr-[15px]">
                    <Checkbox
                      checked={checked}
                      onChange={handleChangeCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <span>Duet</span>
                  </div>
                  <div className="flex items-center mr-[15px]">
                    <Checkbox
                      checked={checked}
                      onChange={handleChangeCheckBox}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                    <p>Stitch</p>
                  </div>
                </div>
              </div>
              <div className="mt-[30px]">
                <div className="flex items-center">
                  <h4 className="font-medium mb-[6px] mr-[16px]">
                    Run the copyright check
                  </h4>
                  <FormGroup>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                      label=""
                    />
                  </FormGroup>
                </div>
                <span className="text-[#999] text-[13px]">
                  We'll check if your video uses pirated audio. If we find a
                  violation, you can edit the video before posting.{" "}
                  <span className="font-medium text-[#333]">
                    looking for more information
                  </span>
                </span>
              </div>
              <div className="mt-[30px]">
                <Stack direction="row" spacing={3}>
                  <Button variant="outlined" size="large">
                    <span className="text-[red] font-bold py-[6px] px-[15px]">
                      Cancel
                    </span>
                  </Button>
                  <Button variant="contained" size="large" disabled>
                    <span className=" font-bold py-[6px] px-[15px]">Post</span>
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UploadContent;
