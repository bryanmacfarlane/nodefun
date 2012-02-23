using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Runtime.Serialization;
using System.IO;
using System.Runtime.Serialization.Json;

namespace nodetest
{
    [DataContract]
    public class Quote
    {
        [DataMember(Name = "quote")]
        public string QuoteText { get; set; }

        [DataMember(Name = "author")]
        public string Author { get; set; }

        public static Quote Deserialize(Stream stream)
        {
            var serializer = new DataContractJsonSerializer(typeof(Quote));

            return serializer.ReadObject(stream) as Quote;
        }
    }
}
