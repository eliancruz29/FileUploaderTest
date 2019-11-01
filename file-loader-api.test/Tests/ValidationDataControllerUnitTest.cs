using System;
using System.Collections.Generic;
using System.Linq;
using file_loader_api.Controllers;
using file_loader_api.ModelDtos;
using file_loader_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Moq;
using NUnit.Framework;

namespace file_loader_api.test.Tests
{
    [TestFixture]
    public class ValidationDataControllerUnitTest
    {
        private readonly Mock<IOptions<ValidationDataDto>> mockValidationData;

        public ValidationDataControllerUnitTest()
        {
            mockValidationData = new Mock<IOptions<ValidationDataDto>>();
        }

        [Test]
        public void TestGet_Correct()
        {
            var model = new ValidationDataDto
            {
                Size = 1298523,
                Types = "application/pdf; image/jpeg"
            };
            // Arrange
            mockValidationData.Setup(x => x.Value).Returns(model);

            var controller = new ValidationDataController(mockValidationData.Object);

            // Act
            var result = controller.Get();

            // Assert
            Assert.IsNotNull(result);
            Assert.That(result, Is.TypeOf<OkObjectResult>());
            var okResult = result as OkObjectResult;
            Assert.That(okResult.Value, Is.TypeOf<ValidationDataDto>());
            var value = okResult.Value as ValidationDataDto;
            Assert.IsNotNull(value);
            Assert.AreEqual(model.Size, value.Size);
            Assert.AreEqual(model.TypeList.Count(), value.TypeList.Count());
        }

        private static Mock<DbSet<T>> CreateDbSetMock<T>(IEnumerable<T> elements) where T : class
        {
            var elementsAsQueryable = elements.AsQueryable();
            var dbSetMock = new Mock<DbSet<T>>();

            dbSetMock.As<IQueryable<T>>().Setup(m => m.Provider).Returns(elementsAsQueryable.Provider);
            dbSetMock.As<IQueryable<T>>().Setup(m => m.Expression).Returns(elementsAsQueryable.Expression);
            dbSetMock.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(elementsAsQueryable.ElementType);
            dbSetMock.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(elementsAsQueryable.GetEnumerator());

            return dbSetMock;
        }
    }
}
