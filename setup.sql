IF NOT EXISTS(SELECT * FROM sys.databases WHERE name = 'HahnSoftwareentwicklung')
	BEGIN
		CREATE DATABASE [HahnSoftwareentwicklung]
	END
GO
USE [HahnSoftwareentwicklung];

GO
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Clients' and xtype='U')
BEGIN
	CREATE TABLE [dbo].[Clients](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NULL,
	[Surname] [varchar](100) NULL,
	[Email] [varchar](100) NULL,
	[RegistrationDate] [datetime] NULL,
	[IsActive] [bit] null,
	PRIMARY KEY CLUSTERED
	(
		[Id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]
	
	INSERT INTO [dbo].[Clients] (Name, Surname, Email, RegistrationDate, IsActive)
	VALUES 
	('Rafael', 'Arduini', 'rafaelarduini@hotmail.com', GETDATE(), 1),
	('Aline Cristina', 'Espindola', 'alineespindola@hotmail.com', GETDATE(), 1),
	('Luiz Claudio', 'Espindola', 'luizespindola@hotmail.com', GETDATE(), 1),
	('Marco Antonio', 'Feliciano', 'marcofeliciano@hotmail.com', GETDATE(), 1),
	('Rafael', 'Arduini', 'rafaelarduini@hotmail.com', GETDATE(), 1);
END
GO
IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Products' and xtype='U')
BEGIN
	CREATE TABLE [dbo].[Products](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[Price] [decimal](18,2) NULL,
	[IsAvailable] [bit] null,
	PRIMARY KEY CLUSTERED
	(
		[Id] ASC
	)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
	) ON [PRIMARY]

	INSERT INTO [dbo].[Products] (Name, Price, IsAvailable)
	VALUES 
	('Nootbook Lenovo', 4000, 1),
	('Motherboard Asus', 700, 1),
	('Headset Redragon', 400, 1); 
END