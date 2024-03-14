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

        public static string Generate(string word)
        {
            byte[] hash = MD5.HashData(Encoding.UTF8.GetBytes(word));
            return Convert.ToBase64String(hash);
        }
        public static bool HashVerify(string hashword, string word)
        {
            if (hashword == Generate(word))
            {
                return true;
            }
            return false;
        }

    }
}
