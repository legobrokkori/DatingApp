FROM mcr.microsoft.com/dotnet/core/sdk:3.1.101 AS build-env

WORKDIR /app

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o out

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1
# allow weak certificates (certificate signed with SHA1)
# by downgrading OpenSSL security level from 2 to 1
RUN sed -i "s|DEFAULT@SECLEVEL=2|DEFAULT@SECLEVEL=1|g" /etc/ssl/openssl.cnf
RUN sed -i "s|TLSv1.2|TLSv1.0|g" /etc/ssl/openssl.cnf

WORKDIR /app
COPY --from=build-env /app/out .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet DatingApp.API.dll
#EXPOSE 80
#EXPOSE 443
#ENTRYPOINT ["dotnet", "DatingApp.API.dll"]
