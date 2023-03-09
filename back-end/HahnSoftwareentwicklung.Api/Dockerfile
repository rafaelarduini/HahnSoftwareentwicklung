#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["HahnSoftwareentwicklung.Api/HahnSoftwareentwicklung.Api.csproj", "HahnSoftwareentwicklung.Api/"]
COPY ["HahnSoftwareentwicklung.Infrastructure/HahnSoftwareentwicklung.Infrastructure.csproj", "HahnSoftwareentwicklung.Infrastructure/"]
COPY ["HahnSoftwareentwicklung.Application/HahnSoftwareentwicklung.Application.csproj", "HahnSoftwareentwicklung.Application/"]
COPY ["HahnSoftwareentwicklung.DomainCore/HahnSoftwareentwicklung.DomainCore.csproj", "HahnSoftwareentwicklung.DomainCore/"]
COPY ["HahnSoftwareentwicklung.Domain/HahnSoftwareentwicklung.Domain.csproj", "HahnSoftwareentwicklung.Domain/"]
COPY ["HahnSoftwareentwicklung.DomainService/HahnSoftwareentwicklung.DomainService.csproj", "HahnSoftwareentwicklung.DomainService/"]
RUN dotnet restore "HahnSoftwareentwicklung.Api/HahnSoftwareentwicklung.Api.csproj"
COPY . .
WORKDIR "/src/HahnSoftwareentwicklung.Api"
RUN dotnet build "HahnSoftwareentwicklung.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "HahnSoftwareentwicklung.Api.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "HahnSoftwareentwicklung.Api.dll"]