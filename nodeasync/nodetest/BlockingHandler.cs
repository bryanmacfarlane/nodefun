using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Net;

namespace nodetest
{
    public class BlockingHandler : IHttpHandler
    {
        #region IHttpHandler Members
        public bool IsReusable
        {
            get
            {
                return true;
            }
        }

        public void ProcessRequest(HttpContext context)
        {
            var quoteService = new QuoteServiceClient("http://localhost:8087");
            var quote = quoteService.GetQuote();

            context.Response.Write(String.Format("A quote from <b>{0}</b><br><h2>{1}</h2>", quote.Author, quote.QuoteText));
        }
        #endregion
    }
}
