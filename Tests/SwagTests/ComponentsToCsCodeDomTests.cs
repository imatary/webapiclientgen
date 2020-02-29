using System;
using Xunit;
using Fonlow.WebApiClientGen.Swag;
using Newtonsoft.Json;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using Microsoft.OpenApi.Readers.Exceptions;
using Microsoft.OpenApi;
using System.IO;
using System.Text;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;

namespace SwagTests
{
	public class ComponentstoCsCodeDom
	{
		[Fact]
		public void TestSimplePed()
		{
			OpenApiDocument doc;
			using (var stream = new FileStream("SwagMock\\SimplePet.json", FileMode.Open, FileAccess.Read))
			{
				doc = new OpenApiStreamReader().Read(stream, out var diagnostic);
			}

			var settings = new Settings()
			{
				ClientNamespaceSuffix = ".Client",
				ClientNamespace = "MyNS",
			};

			var gen = new ComponentsToCsCodeDom(settings, new System.CodeDom.CodeCompileUnit());
			gen.CreateCodeDom(doc.Components);
			using (var writer = new StringWriter())
			{
				gen.WriteCode(writer);
				var s = writer.ToString();
				string expected = @"//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyNS {
    
    
    public class Pet {
        
        /// <summary>
        /// The name given to a pet
        /// </summary>
        public string name { get; set; }//;
        
        /// <summary>
        /// Type of a pet
        /// </summary>
        public string petType { get; set; }//;
    }
}
";
				Assert.Equal(expected, s);
			}

		}


	}
}
