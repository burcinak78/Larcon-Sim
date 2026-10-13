# syntax=docker/dockerfile:1

FROM mcr.microsoft.com/dotnet/sdk:10.0-alpine AS build
WORKDIR /src
COPY Larcon.slnx ./
COPY src/Larcon.Api/Larcon.Api.csproj src/Larcon.Api/
COPY tests/Larcon.Api.Tests/Larcon.Api.Tests.csproj tests/Larcon.Api.Tests/
RUN dotnet restore Larcon.slnx
COPY . .
RUN dotnet publish src/Larcon.Api/Larcon.Api.csproj -c Release -o /app --no-restore

# TeamCity / lokal: docker build --target test backend
FROM build AS test
RUN dotnet test Larcon.slnx -c Release --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine AS runtime
WORKDIR /app
ENV ASPNETCORE_HTTP_PORTS=8080
COPY --from=build /app .
USER $APP_UID
EXPOSE 8080
HEALTHCHECK --interval=10s --timeout=3s --start-period=15s --retries=5 \
  CMD wget -qO- http://127.0.0.1:8080/health || exit 1
ENTRYPOINT ["dotnet", "Larcon.Api.dll"]
