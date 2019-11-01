using System;
using System.Collections.Generic;
using file_loader_api.Models;

namespace file_loader_api.test
{
    public static class FilesData
    {
        public static List<FileLoader> Files
        {
            get
            {
                return new List<FileLoader>()
                {
                    new FileLoader
                    {
                        Name = "File #1",
                        Size = 123456,
                        Type = "application/pdf",
                        Date = Convert.ToDateTime("08/15/2019 11:59:59 PM"),
                        User = "User #1"
                    },
                    new FileLoader
                    {
                        Name = "File #2",
                        Size = 45000,
                        Type = "application/pdf",
                        Date = Convert.ToDateTime("04/20/2018 10:34:59 AM"),
                        User = "User #2"
                    },
                    new FileLoader
                    {
                        Name = "File #3",
                        Size = 345231,
                        Type = "application/pdf",
                        Date = Convert.ToDateTime("09/29/2019 07:34:00 PM"),
                        User = "User #3"
                    },
                    new FileLoader
                    {
                        Name = "File #4",
                        Size = 123456,
                        Type = "application/msword",
                        Date = Convert.ToDateTime("08/15/2019 11:59:59 PM"),
                        User = "User #4"
                    },
                    new FileLoader
                    {
                        Name = "File #5",
                        Size = 45000,
                        Type = "application/msword",
                        Date = Convert.ToDateTime("04/20/2018 10:34:59 AM"),
                        User = "User #5"
                    },
                    new FileLoader
                    {
                        Name = "File #6",
                        Size = 345231,
                        Type = "application/msword",
                        Date = Convert.ToDateTime("09/29/2019 07:34:00 PM"),
                        User = "User #6"
                    },
                    new FileLoader
                    {
                        Name = "File #7",
                        Size = 123456,
                        Type = "text/rtf",
                        Date = Convert.ToDateTime("08/15/2019 11:59:59 PM"),
                        User = "User #7"
                    },
                    new FileLoader
                    {
                        Name = "File #8",
                        Size = 45000,
                        Type = "text/rtf",
                        Date = Convert.ToDateTime("04/20/2018 10:34:59 AM"),
                        User = "User #8"
                    },
                    new FileLoader
                    {
                        Name = "File #9",
                        Size = 345231,
                        Type = "text/rtf",
                        Date = Convert.ToDateTime("09/29/2019 07:34:00 PM"),
                        User = "User #9"
                    }
                };
            }
        }
    }
}
