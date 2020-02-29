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
		static OpenApiDocument ReadJson(string filePath)
		{
			using (var stream = new FileStream(filePath, FileMode.Open, FileAccess.Read))
			{
				return new OpenApiStreamReader().Read(stream, out var diagnostic);
			}
		}

		[Fact]
		public void TestSimplePet()
		{
			OpenApiDocument doc = ReadJson("SwagMock\\SimplePet.json");
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

		[Fact]
		public void TestSimplePetCat()
		{
			OpenApiDocument doc = ReadJson("SwagMock\\SimplePetCat.json");
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
    
    /// <summary>
    /// A representation of a cat
    /// </summary>
    public class Cat : Pet {
        
        /// <summary>
        /// The measured skill for hunting
        /// </summary>
        public string huntingSkill { get; set; }//;
    }
}
";
				Assert.Equal(expected, s);
			}

		}

		[Fact]
		public void TestSimpleEnum()
		{
			OpenApiDocument doc = ReadJson("SwagMock\\Enum.json");
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
    
    
    /// <summary>
    /// Phone types
    /// </summary>
    public enum PhoneType {
        
        Tel = 0,
        
        Mobile = 1,
        
        Skype = 2,
        
        Fax = 3,
    }
}
";
				Assert.Equal(expected, s);
			}

		}

		[Fact]
		public void TestSimpleIntEnum()
		{
			OpenApiDocument doc = ReadJson("SwagMock\\IntEnum.json");
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
    
    
    /// <summary>
    /// Integer enum types
    /// </summary>
    public enum IntType {
        
        _1 = 0,
        
        _2 = 1,
        
        _3 = 2,
        
        _4 = 3,
    }
}
";
				Assert.Equal(expected, s);
			}

		}

		[Fact]
		public void TestEnumType()
		{
			var type = typeof(PhoneType);
			var fields = type.GetFields();
			Assert.NotEmpty(fields);
		}

	}

	public enum PhoneType
	{
		/// <summary>
		/// Land line
		/// </summary>
		Tel = 0,

		/// <summary>
		/// Mobile phone
		/// </summary>
		Mobile = 1,

		Skype = 2,
		Fax = 3,
	}

}
