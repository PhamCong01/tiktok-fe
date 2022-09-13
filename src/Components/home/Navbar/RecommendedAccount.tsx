import { Avatar, Stack } from "@mui/material";
import React from "react";

function RecommendedAccount() {
  return (
    <div className="w-[100%]  border-b border-gray-300 mb-[10px]">
      <h4 className="font-[600] text-[#666] mb-[5px] px-[10px]">Recommended account</h4>

      <div>
        <div className="hover:bg-gray-100 py-[10px] px-[15px] cursor-pointer hover:rounded-lg">
          <Stack direction="row" spacing={2}>
            <Avatar src="/static/images/avatar/1.jpg" />
            <div>
              <h3 className="font-medium text-[17px]">Pham Van Cong</h3>
              <h3 className="text-[13px] text-[#999]">Pham Van Cong</h3>
            </div>
          </Stack>
        </div>
        <div className="hover:bg-gray-100 py-[10px] px-[15px] cursor-pointer hover:rounded-lg">
          <Stack direction="row" spacing={2}>
            <Avatar src="/static/images/avatar/1.jpg" />
            <div>
              <h3 className="font-medium text-[17px]">Pham Van Cong</h3>
              <h3 className="text-[13px] text-[#999]">Pham Van Cong</h3>
            </div>
          </Stack>
        </div>
        <div className="hover:bg-gray-100 py-[10px] px-[15px] cursor-pointer hover:rounded-lg">
          <Stack direction="row" spacing={2}>
            <Avatar src="/static/images/avatar/1.jpg" />
            <div>
              <h3 className="font-medium text-[17px]">Pham Van Cong</h3>
              <h3 className="text-[13px] text-[#999]">Pham Van Cong</h3>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default RecommendedAccount;
