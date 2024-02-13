using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace SecondTech.Core.Models.Responses
{
    public class ImgResponse
    {
        public ImgResponseData? Data { get; set; }
        public bool Success { get; set; }
        public int Status { get; set; }
    }
}
