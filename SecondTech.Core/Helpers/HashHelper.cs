using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace SecondTech.Core.Helpers
{
    public class HashHelper
    {

        public static string HashWord(string input)
        {
            byte[] hash = MD5.HashData(Encoding.UTF8.GetBytes(input));
            return Convert.ToBase64String(hash);
        }

    }
}
