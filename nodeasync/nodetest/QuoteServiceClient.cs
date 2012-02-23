using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Threading.Tasks;

namespace nodetest
{
    public class QuoteServiceClient
    {
        public QuoteServiceClient(string url)
        {
            this.Url = url;
        }
        
        public Quote GetQuote() 
        {
            HttpWebRequest request = HttpWebRequest.Create(this.Url) as HttpWebRequest;

            return Quote.Deserialize(request.GetResponse().GetResponseStream());
        }

        public Task<Quote> GetQuoteAsync()
        {
            HttpWebRequest request = HttpWebRequest.Create(this.Url) as HttpWebRequest;

            return Task.Factory.FromAsync<WebResponse>(request.BeginGetResponse, request.EndGetResponse, null)
                        .ContinueWith(t => Quote.Deserialize(((HttpWebResponse)t.Result).GetResponseStream()));
        }

        public string Url { get; set; }
    }
}
