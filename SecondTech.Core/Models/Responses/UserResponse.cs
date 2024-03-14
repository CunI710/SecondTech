using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Models.Responses
{
    public class UserResponse
    {
        public UserInfoResponse? UserInfo {  get; set; }
        public string? JWT { get; set; }
    }
}