using System;
using System.Collections.Generic;
using System.Linq;
using file_loader_api.Controllers;
using file_loader_api.ModelDtos;
using file_loader_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using NUnit.Framework;

namespace file_loader_api.test.Tests
{
    [TestFixture]
    public class FileControllerUnitTest
    {
        private readonly Mock<ILogger<FileController>> mockILogger;

        public FileControllerUnitTest()
        {
            mockILogger = new Mock<ILogger<FileController>>();
        }

        [Test]
        public void TestGetFiles_Correct()
        {
            // Arrange
            var filesMock = CreateDbSetMock(FilesData.Files);
            var options = new DbContextOptionsBuilder<FileContext>()
                              .UseInMemoryDatabase(Guid.NewGuid().ToString())
                              .Options;
            var context = new FileContext(options);
            context.FileLoaders = filesMock.Object;

            var controller = new FileController(context, mockILogger.Object);

            // Act
            var result = controller.GetFileTables();

            // Assert
            Assert.AreEqual(9, context.FileLoaders.Count());
            Assert.IsNotNull(result);
            Assert.That(result, Is.TypeOf<OkObjectResult>());
            var okResult = result as OkObjectResult;
            Assert.That(okResult.Value, Is.TypeOf<List<FileTablesDto>>());
            var value = okResult.Value as List<FileTablesDto>;
            Assert.IsNotNull(value);
            Assert.AreEqual(3, value.Count());
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
